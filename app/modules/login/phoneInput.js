import React from 'react';

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { LinearGradient } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';

class PhoneInput extends React.Component {
  static navigationOptions = {
    headerTransparent: true,
    headerStyle: { zIndex: 100 },
  };

  state = {
    phoneNum: '',
    // value: '',
  };

  //  TODO refactor to update after each part of the number
  handleNumber = value => {
    if (value.length === 10) {
      //  reformat and return num number
      // const phoneNum = value.replace(/(\d{3})/, '($1) ');
      const phoneNum = value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
      this.setState({ phoneNum });
    }
  };

  render() {
    const { navigation } = this.props;
    const { phoneNum } = this.state;

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
        height: hp('31%'),
        width: wp('80%'),
      },
      inputContainer: {
        flex: 1,
        paddingTop: hp('5%'),
        paddingLeft: wp('5%'),
        backgroundColor: 'white',
      },
      aboveInputText: {
        fontSize: wp('3%'),
        fontWeight: 'bold',
        marginBottom: hp('1.5%'),
      },
      inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: wp('6%'),
      },
      textInput: {
        width: wp('35%'),
      },
      belowInputText: {
        marginTop: hp('2%'),
        fontSize: wp('3%'),
      },
      buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: wp('5%'),
        backgroundColor: 'black',
        marginBottom: hp('2.25%'),
      },
      text: {
        color: 'white',
        paddingLeft: wp('1%'),
        fontSize: wp('4.5%'),
        fontWeight: 'bold',
      },
      socialContainer: {
        width: wp('80%'),
      },
      socialText: {
        fontWeight: 'bold',
        fontSize: wp('3.25%'),
        textAlign: 'center',
      },
    });

    return (
      <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
        <LinearGradient colors={['#7fbeff', '#fff', '#ff8200']} style={styles.linearGradient} />

        <View style={styles.middleContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.aboveInputText}>ENTER YOUR PHONE NUMBER</Text>
            <View style={styles.inputRow}>
              <TextInput
                placeholder="(555) 555-5555"
                style={styles.textInput}
                keyboardType="number-pad"
                name="phoneNum"
                type="number"
                onChangeText={this.handleNumber}
                value={phoneNum}
                maxLength={14}
              />
              <Icon name="mobile" size={wp('7.5%')} color="black" />
            </View>
            <Text style={styles.belowInputText}>We'll text a code to verify your phone</Text>
          </View>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.text}>Get Code</Text>
            <Icon name="long-arrow-right" size={wp('7.5%')} color="white" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.socialContainer}
          onPress={() => navigation.navigate('SocialAccount')}
        >
          <Text style={styles.socialText}>OR CONNECT USING A SOCIAL ACCOUNT </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

export default PhoneInput;

/*
<TextInput
placeholder="____"
placeholderStyle={{ backgroundColor: 'blue' }}
style={{ letterSpacing: 10 }}
keyboardType="number-pad"
name="value"
type="number"
onChangeText={value => {
  this.setState({ value });
}}
value={this.state.value}
maxLength={4}
/>
*/
