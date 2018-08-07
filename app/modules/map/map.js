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

class Map extends React.Component {
  state = {};

  render() {
    const { navigation } = this.props;

    const styles = StyleSheet.create({
      mapContainer: {
        flex: 1,
        height: hp('100%'),
      },
      icon: {
        marginLeft: hp('3%'),
      },
    });

    return (
      <MapView region={region} style={styles.mapContainer}>
        <SafeAreaView>
          drawerIcon: (
          <SafeAreaView style={styles.icon}>
            <Icon
              name="bars"
              size={wp('7.5%')}
              color="black"
              onPress={() => navigation.openDrawer()}
            />
          </SafeAreaView>
          ),
        </SafeAreaView>
      </MapView>
    );
  }
}

export default Map;
