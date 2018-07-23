import React, { Component } from 'react';
import MapView, { Marker } from 'react-native-maps';

import { getRegionForCoordinates } from './utils';
import coords from './coords';
import styles from '../../styles';

export default class Map extends Component {
  state = {
    region: {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0,
      longitudeDelta: 0,
    },
    drivers: [],
  };

  componentWillMount() {
    const region = getRegionForCoordinates(coords);
    const drivers = coords.map((pos, i) => ({ position: pos, id: i }));
    this.setState({ drivers, region });
  }

  componentDidMount() {
    this.moveDrivers();
  }

  moveDrivers() {
    let { drivers } = this.state;
    setTimeout(() => {
      drivers = drivers.map(({ id, position: { latitude, longitude } }) => ({
        id,
        position: { latitude: latitude + 0.00005, longitude: longitude - 0.00005 },
      }));

      this.setState({ drivers });
      this.moveDrivers();
    }, 1000);
  }

  render() {
    const { drivers, region } = this.state;
    return (
      <MapView style={styles.map} initialRegion={region}>
        {drivers.map(driver => <Marker key={driver.id} coordinate={driver.position} />)}
      </MapView>
    );
  }
}
