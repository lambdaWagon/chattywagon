import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

class Promos extends React.Component {
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
      },
    });

    return (
      <SafeAreaView style={styles.container}>
        <Text>PROMOS</Text>
      </SafeAreaView>
    );
  }
}

export default Promos;
