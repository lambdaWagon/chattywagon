import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

class Help extends React.Component {
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
      <View style={styles.container}>
        <Text>HELP</Text>
      </View>
    );
  }
}

export default Help;
