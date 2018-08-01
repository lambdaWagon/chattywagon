import React from 'react';
import MapView from 'react-native-maps';
import { View, StyleSheet } from 'react-native';
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
  static navigationOptions = {
    headerLeft: (
      <View style={{ marginTop: hp('15%'), marginLeft: wp('5%') }}>
        <Icon
          name="bars"
          size={wp('7.5%')}
          color="black"
          onPress={() => this.props.navigation.openDrawer()}
        />
      </View>
    ),
  };

  state = {};

  render() {
    // const { navigation } = this.props;
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
