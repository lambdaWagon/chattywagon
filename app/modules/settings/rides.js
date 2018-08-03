import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

class Rides extends React.Component {
  static navigationOptions = {
    headerTransparent: true,
    headerStyle: { zIndex: 100 },
  };

  state = {};

  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        height: hp('100%'),
        justifyContent: 'center',
        alignItems: 'center',
      },
      touchContainer: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
      },
    });

    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={styles.touchContainer}
          onPress={() => this.props.navigation.openDrawer()}
        />
      </SafeAreaView>
    );
  }
}

export default Rides;
