import React, { Component } from 'react';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

import { getRegionFromArray, getRegionFromPoint } from './utils';
import { database, config, geoFire } from '../../config/firebase';

import styles from '../../styles';

export default class Map extends Component {
  static navigationOptions = {
    headerTransparent: true,
    headerStyle: { zIndex: 100 },
  };

  state = {
    region: {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0,
      longitudeDelta: 0,
    },
    pickupLocation: {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0,
      longitudeDelta: 0,
    },
    drivers: [],
  };

  async componentWillMount() {
    const snapshot = await database.ref('driverLocations').once('value');
    const drivers = Object.entries(snapshot.val()).map(([k, v]) => ({
      id: k,
      latitude: v.l[0],
      longitude: v.l[1],
    }));

    const region = getRegionFromArray(drivers);

    this.setState({ drivers, region });
  }

  async componentDidMount() {
    const query = await geoFire.query({
      center: [35.04563, -85.30968],
      radius: 10,
    });

    await query.on('key_moved', (key, location, distance) => {
      this.onChildChange(key, location);
      console.log(`${key} moved within query to ${location} ${distance} km from center`);
    });

    await query.on('key_exited', (key, location, distance) => {
      console.log(`${key} exited query to ${location} ${distance} km from center`);
    });
  }

  onChildChange = (key, location) => {
    this.setState(p => ({
      drivers: p.drivers.map(
        driver =>
          driver.id === key ? { id: key, latitude: location[0], longitude: location[1] } : driver,
      ),
    }));
  };

  pickLocationHandler = e => {
    const {
      coordinate: { latitude, longitude },
    } = e.nativeEvent;
    const pickupLocation = getRegionFromPoint(latitude, longitude, 300);
    this.setState({ pickupLocation });
  };

  render() {
    const { drivers, pickupLocation, region } = this.state;
    return (
      <MapView style={styles.map} region={region} onPress={this.pickLocationHandler}>
        <Marker pinColor="blue" title="Pickup Location" draggable coordinate={region} />
        <Marker pinColor="yellow" title="Destination" draggable coordinate={pickupLocation} />
        {drivers.map(driver => <Marker key={driver.id} coordinate={driver} />)}
        <MapViewDirections
          origin={region}
          destination={pickupLocation}
          apikey={config.googleMapsApiKey}
        />
      </MapView>
    );
  }
}
