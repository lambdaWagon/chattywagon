import React from 'react';
import MapView from 'react-native-maps';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const region = {
  latitude: 37.784334,
  longitude: -122.406417,
  latitudeDelta: 0.00922,
  longitudeDelta: 0.004258004926108375,
};

class Map extends React.Component {
  static navigationOptions = {
    headerTransparent: true,
    headerStyle: { zIndex: 100 },
  };

  state = {};

  render() {
    const styles = StyleSheet.create({
      mapContainer: {
        flex: 1,
        height: hp('100%'),
      },
    });

    return <MapView region={region} style={styles.mapContainer} />;
  }
}

export default Map;
