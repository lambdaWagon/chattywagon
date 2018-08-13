import React from 'react';
import MapView from 'react-native-maps';
import { View, StyleSheet, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';

const region = {
  latitude: 37.784334,
  longitude: -122.406417,
  latitudeDelta: 0.00922,
  longitudeDelta: 0.004258004926108375,
};

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    height: hp('100%'),
  },
  icon: {
    position: 'absolute',
    marginLeft: wp('7%'),
    marginTop: hp('5%'),
  },
});

class Map extends React.Component {
  static navigationOptions = {
    header: true,
    headerMode: 'screen',
  };

  state = {};

  render() {
    // const { navigation } = this.props
    console.log(this.props.navigation.state);
    return <MapView region={region} style={styles.mapContainer} />;
  }
}

export default Map;
