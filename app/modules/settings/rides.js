import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Icon from 'react-native-vector-icons/FontAwesome';

// import Hamburger from 'react-native-hamburger';

class Rides extends React.Component {
  static navigationOptions = {
    headerTransparent: true,
    headerStyle: { zIndex: 100 },
  };

  render() {
    const { navigation } = this.props;

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        height: hp('100%'),
      },
      icon: {
        marginLeft: hp('3%'),
      },
    });

    return (
      <SafeAreaView style={styles.container}>
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
        {/* <View>
          <Hamburger
            active={this.props.screenProps.active}
            type="cross"
            onPress={() => this.props.screenProps.hamburger(navigation)}
          />
        </View> */}
      </SafeAreaView>
    );
  }
}

export default Rides;
