import React from 'react'

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
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

import Button from '../common/Button'

const { height, width } = Dimensions.get('window')

class CodeInput extends React.Component {
  static navigationOptions = {
    headerTransparent: true,
    headerStyle: { zIndex: 100 }
  }

  state = {
    value: ''
  }

  onPress = () => this.props.navigation.navigate('main')

  render() {
    const { navigate } = this.props.navigation
    const { value } = this.state

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
      middleContainerX: {
        height: hp('32%'),
        width: wp('80%')
      },
      aboveInputText: {
        fontSize: wp('3%'),
        fontWeight: 'bold',
        marginBottom: hp('1.5%')
      },
      aboveInputTextX: {
        fontSize: wp('1.7%'),
        fontWeight: 'bold',
        marginBottom: hp('1.5%')
      },
      input: {
        letterSpacing: 10,
        fontSize: hp('3%'),
        fontWeight: 'bold'
      },
      inputX: {
        letterSpacing: 10,
        fontSize: hp('1.5%'),
        fontWeight: 'bold'
      },
      inputContainer: {
        flex: 1,
        paddingTop: hp('5%'),
        paddingLeft: wp('5%'),
        backgroundColor: 'white'
      },
      text: {
        color: 'white',
        paddingLeft: wp('1%'),
        fontSize: wp('4.5%'),
        fontWeight: 'bold'
      },
      noCodeContainer: {
        width: wp('80%')
      },
      noCodeText: {
        fontWeight: 'bold',
        fontSize: wp('3.25%'),
        textAlign: 'center'
      },
      noCodeTextX: {
        fontWeight: 'bold',
        fontSize: wp('1.8%'),
        textAlign: 'center',
        marginTop: hp('2.15%')
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
              ENTER THE 4-DIGIT CODE
            </Text>
            <View style={{ alignItems: 'center' }}>
              <TextInput
                placeholder="__       __       __       __"
                placeholderStyle={{ backgroundColor: 'blue' }}
                style={
                  Platform.OS === 'ios' && (height === 812 || width === 812)
                    ? styles.inputX
                    : styles.input
                }
                keyboardType="number-pad"
                name="value"
                type="number"
                onChangeText={value => {
                  this.setState({ value })
                }}
                value={value}
                maxLength={4}
              />
            </View>
          </View>
          <View style={styles.splashButtonContainer}>
            <Button navigate={this.onPress}>SIGN IN</Button>
          </View>
          <TouchableOpacity style={styles.noCodeContainer}>
            <Text
              style={
                Platform.OS === 'ios' && (height === 812 || width === 812)
                  ? styles.noCodeTextX
                  : styles.noCodeText
              }
            >
              I DIDN'T RECEIVE A CODE
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

export default CodeInput
