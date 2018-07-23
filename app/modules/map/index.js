import React, { Component } from 'react';
import MapView, { Marker } from 'react-native-maps';

export default class Map extends Component {
  /* eslint react/no-unused-state: 0 */
  state = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  render() {
    const { region } = this.state;
    return (
      <MapView region={region}>
        <Marker draggable />
      </MapView>
    );
  }
}
