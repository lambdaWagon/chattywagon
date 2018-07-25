import React, { Component } from 'react';
import MapView, { Marker } from 'react-native-maps';

import { getRegionFromArray, getRegionFromPoint } from './utils';
import { database } from '../../config/firebase';

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
    drivers: [],
  };

  async componentWillMount() {
    const snapshot = await database.ref('drivers').once('value');
    const drivers = snapshot.val();
    const coords = drivers.map(driver => driver.position);
    const region = getRegionFromArray(coords);
    this.setState({ drivers, region });
  }

  async componentDidMount() {
    await database.ref('drivers').on('child_added', this.onChildChange);
    await database.ref('drivers').on('child_changed', this.onChildChange);
  }

  onChildChange = data => {
    let { drivers } = this.state;

    const driver = data.val();
    if (drivers.length > 0) {
      drivers = drivers.map(obj => (driver.id === obj.id ? driver : obj));
      this.setState({ drivers });
    }
  };

  pickLocationHandler = e => {
    const {
      coordinate: { latitude, longitude },
    } = e.nativeEvent;
    const region = getRegionFromPoint(latitude, longitude, 300);
    this.setState({ region });
  };

  render() {
    const { drivers, region } = this.state;
    return (
      <MapView style={styles.map} region={region} onPress={this.pickLocationHandler}>
        <Marker pinColor="blue" title="Passenger" draggable coordinate={region} />
        {drivers.map(driver => <Marker key={driver.id} coordinate={driver.position} />)}
      </MapView>
    );
  }
}
