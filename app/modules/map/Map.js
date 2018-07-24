import React, { Component } from 'react';
import MapView, { Marker } from 'react-native-maps';

import { getRegionFromArray, getRegionFromPoint } from './utils';
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

  timer = null;

  componentWillMount() {
    const region = getRegionFromArray(coords);
    const drivers = coords.map((pos, i) => ({ position: pos, id: i }));
    this.setState({ drivers, region });
  }

  componentDidMount() {
    this.moveDrivers();
  }

  componentWillUnmount() {
    clearTimeout(timer);
  }

  pickLocationHandler = e => {
    const {
      coordinate: { latitude, longitude },
    } = e.nativeEvent;
    const region = getRegionFromPoint(latitude, longitude, 50);
    this.setState({ region });
  };

  moveDrivers() {
    let { drivers } = this.state;
    timer = setTimeout(() => {
      /* eslint no-bitwise: 0 */
      // const i = Math.random() * drivers.length | 0;
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
      <MapView style={styles.map} initialRegion={region} onPress={this.pickLocationHandler}>
        {drivers.map(driver => <Marker key={driver.id} coordinate={driver.position} />)}
      </MapView>
    );
  }
}
