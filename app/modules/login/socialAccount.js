import React from 'react';

import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { LinearGradient } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';

class SocialAccount extends React.Component {
  static navigationOptions = {
    headerTransparent: true,
    headerStyle: { zIndex: 100 },
  };

  state = {};

  render() {
    const { navigation } = this.props;

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      linearGradient: {
        position: 'absolute',
        height: hp('100%'),
        width: wp('100%'),
      },
      middleContainer: {
        height: hp('40%'),
        width: wp('80%'),
      },
      socialIconsContainer: {
        paddingTop: hp('5%'),
        paddingBottom: hp('5%'),
        paddingLeft: wp('5%'),
        backgroundColor: 'white',
      },
      socialTouch: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: wp('2%'),
      },
      socialIcons: {
        marginRight: wp('5%'),
      },
      socialText: {
        fontSize: wp('5%'),
      },
      buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: wp('5%'),
        backgroundColor: 'black',
        marginBottom: hp('2.25%'),
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
      <View style={styles.container}>
        <LinearGradient colors={['#7fbeff', '#fff', '#ff8200']} style={styles.linearGradient} />

        <View style={styles.middleContainer}>
          <View style={styles.socialIconsContainer}>
            <TouchableOpacity
              style={styles.socialTouch}
              onPress={() => navigation.navigate('SocialLogin')}
            >
              <Icon style={styles.socialIcons} name="google" size={wp('7.5%')} color="black" />
              <Text style={styles.socialText}>Google</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.socialTouch}
              onPress={() => navigation.navigate('SocialLogin')}
            >
              <Icon style={styles.socialIcons} name="twitter" size={wp('7.5%')} color="black" />
              <Text style={styles.socialText}>Twitter</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.socialTouch}
              onPress={() => navigation.navigate('SocialLogin')}
            >
              <Icon
                style={styles.socialIcons}
                name="facebook-square"
                size={wp('7.5%')}
                color="black"
              />
              <Text style={styles.socialText}>Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.socialTouch}
              onPress={() => navigation.navigate('SocialLogin')}
            >
              <Icon style={styles.socialIcons} name="envelope" size={wp('7.5%')} color="black" />
              <Text style={styles.socialText}>Email</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
            <Text style={styles.text}>CHOOSE AN ACCOUNT</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default SocialAccount;
