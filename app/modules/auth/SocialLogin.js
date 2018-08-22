import React from 'react'

import {
  Text,
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Dimensions
} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

import { LinearGradient } from 'expo'
import Icon from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Button from '../common/Button'

const { height, width } = Dimensions.get('window')

class SocialLogin extends React.Component {
  static navigationOptions = {
    headerTransparent: true,
    headerStyle: { zIndex: 100 }
  }

  state = {}

  onPress = () => this.props.navigation.navigate('main')

  render() {
    const { navigate } = this.props.navigation

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
        height: hp('40%'),
        width: wp('80%')
      },
      middleContainerX: {
        height: hp('38%'),
        width: wp('80%')
      },
      inputContainer: {
        flex: 1,
        paddingTop: hp('5%'),
        paddingLeft: wp('5%'),
        backgroundColor: 'white'
      },
      aboveInputText: {
        fontSize: wp('3%'),
        fontWeight: 'bold'
      },
      aboveInputTextX: {
        fontSize: wp('2%'),
        fontWeight: 'bold'
      },
      inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: wp('6%'),
        marginBottom: hp('4%')
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
      }
    })

    return (
      <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
        <LinearGradient colors={['#7fbeff', '#fff', '#ff8200']} style={styles.linearGradient} />

        <View
          style={
            Platform.OS === 'ios' && (height === 812 || width === 812)
              ? styles.middleContainerX
              : styles.middleContainer
          }
        >
          <View style={styles.inputContainer}>
            <Text
              style={
                Platform.OS === 'ios' && (height === 812 || width === 812)
                  ? styles.aboveInputTextX
                  : styles.aboveInputText
              }
            >
              EMAIL
            </Text>
            <View style={styles.inputRow}>
              <TextInput
                placeholder="name@mail.com"
                returnKeyType="next"
                onSubmitEditing={() => this.passwordInput.focus()}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                style={
                  Platform.OS === 'ios' && (height === 812 || width === 812)
                    ? { marginTop: hp('1%'), fontSize: wp('2%') }
                    : null
                }
              />
              <Icon name="envelope" size={wp('7.5%')} color="black" />
            </View>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                marginBottom: hp('3%'),
                width: wp('70%'),
                opacity: 0.1
              }}
            />
            <Text
              style={
                Platform.OS === 'ios' && (height === 812 || width === 812)
                  ? styles.aboveInputTextX
                  : styles.aboveInputText
              }
            >
              PASSWORD
            </Text>
            <View style={styles.inputRow}>
              <TextInput
                placeholder="******"
                returnKeyType="go"
                secureTextEntry
                ref={input => (this.passwordInput = input)}
                style={
                  Platform.OS === 'ios' && (height === 812 || width === 812)
                    ? { marginTop: hp('1%'), fontSize: wp('2%') }
                    : null
                }
              />
              <Ionicons name="md-key" size={wp('7.5%')} color="black" />
            </View>
          </View>
          <View style={styles.splashButtonContainer}>
            <Button navigate={this.onPress}>SIGN IN</Button>
          </View>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

export default SocialLogin
