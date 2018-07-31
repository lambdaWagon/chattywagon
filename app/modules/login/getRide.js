import React from 'react';

import { Text, View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { LinearGradient } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';

class GetRide extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {};

  render() {
    const { navigation } = this.props;

    const styles = StyleSheet.create({
      linearGradient: {
        position: 'absolute',
        opacity: 0.8,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
      touchContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'column',
        paddingBottom: hp('10%'),
      },

      buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: wp('5%'),
        backgroundColor: 'black',
        width: wp('80%'),
        height: hp('9.5%'),
      },
      text: {
        color: 'white',
        paddingLeft: wp('1%'),
        fontSize: wp('4.5%'),
        fontWeight: 'bold',
      },
    });

    return (
      <View>
        <ImageBackground
          source={require('../../../Chatty_Wagon2.jpg')}
          style={{ width: wp('100%'), height: hp('100%') }}
          resizeMode="cover"
        >
          <LinearGradient colors={['#7fbeff', '#fff', '#ff8200']} style={styles.linearGradient} />

          <TouchableOpacity
            style={styles.touchContainer}
            underlayColor="white"
            onPress={() => navigation.navigate('PhoneInput')}
          >
            <View style={styles.buttonContainer}>
              <Text style={styles.text}>Get a Ride</Text>
              <Icon name="long-arrow-right" size={wp('7.5%')} color="white" />
            </View>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

export default GetRide;
