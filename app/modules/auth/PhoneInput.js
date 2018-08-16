import React from 'react'

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView
} from 'react-native'

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

import { LinearGradient } from 'expo'
import Icon from 'react-native-vector-icons/FontAwesome'

import Button from '../common/Button'

class PhoneInput extends React.Component {
  static navigationOptions = {
    headerTransparent: true,
    headerStyle: { zIndex: 100 }
  }

  state = {
    input: ''
  }

  onPress = () => this.props.navigation.navigate('CodeInput')

  phoneNumberFormatter = n => {
    const num = n.replace(/[^0-9]/g, '')
    if (num.length >= 8) {
      return `(${num.substr(0, 3)}) ${num.substr(3, 3)}-${num.substr(6)}`
    }
    if (num.length >= 3 && num.length < 8) {
      return `${num.substr(0, 3)}-${num.substr(3)}`
    }
    return num
  }

  handleInput = i => {
    const input = this.phoneNumberFormatter(i)
    this.setState({ input })
  }

  render() {
    const { navigate } = this.props.navigation
    const { input } = this.state

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      linearGradient: {
        position: 'absolute',
        height: hp('100%'),
        width: wp('100%')
      },
      middleContainer: {
        height: hp('31%'),
        width: wp('80%')
      },
      inputContainer: {
        flex: 1,
        paddingTop: hp('4%'),
        paddingLeft: wp('5%'),
        backgroundColor: 'white'
      },
      aboveInputText: {
        fontSize: wp('3%'),
        fontWeight: 'bold',
        marginBottom: hp('1.5%')
      },
      inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: wp('6%')
      },
      textInput: {
        width: wp('35%')
      },
      belowInputText: {
        marginTop: hp('2%'),
        fontSize: wp('3%')
      },
      buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: wp('5%'),
        backgroundColor: 'black',
        marginBottom: hp('2.25%'),
        height: hp('9.5%')
      },
      text: {
        color: 'white',
        paddingLeft: wp('1%'),
        fontSize: wp('4.5%'),
        fontWeight: 'bold'
      },
      socialContainer: {
        width: wp('80%')
      },
      socialText: {
        fontWeight: 'bold',
        fontSize: wp('3.25%'),
        textAlign: 'center'
      }
    })

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
                onChangeText={this.handleInput}
                value={input}
                maxLength={14}
              />
              <Icon name="mobile" size={wp('7.5%')} color="black" />
            </View>
            <Text style={styles.belowInputText}>We'll text a code to verify your phone</Text>
          </View>
          <View style={styles.splashButtonContainer}>
            <Button navigate={this.onPress}>GET CODE</Button>
          </View>
        </View>
        <TouchableOpacity style={styles.socialContainer} onPress={() => navigate('SocialAccount')}>
          <Text style={styles.socialText}>OR CONNECT USING A SOCIAL ACCOUNT </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

export default PhoneInput
