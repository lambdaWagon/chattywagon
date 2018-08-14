import React from 'react'
import { LinearGradient } from 'expo'
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import PropTypes from 'prop-types'

import Button from '../common/Button'

const styles = StyleSheet.create({
  linearGradient: {
    height: hp('100%'),
    width: wp('100%')
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputContainer: {
    backgroundColor: 'white',
    width: 294,
    height: 132,
    padding: 25,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    shadowColor: 'black',
    shadowOpacity: 0.35,
    shadowRadius: 25,
    shadowOffset: { width: 0, height: 15 }
  },
  aboveInputText: {
    fontSize: 10,
    fontFamily: 'black',
    letterSpacing: 1.5,
    marginBottom: 16
  },
  textInput: {
    fontSize: 20,
    fontFamily: 'black',
    letterSpacing: 40,
    marginLeft: 5
  },
  underline: {
    fontSize: 20,
    color: '#e5e5e5',
    top: 66,
    left: 25,
    position: 'absolute',
    letterSpacing: 13
  },
  noCodeContainer: {
    marginTop: 20,
    width: 294
  },
  noCodeText: {
    textAlign: 'center',
    fontFamily: 'black',
    fontSize: 10,
    letterSpacing: 1.5
  }
})

class CodeInput extends React.Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired
    }).isRequired
  }

  state = { value: '' }

  render() {
    const {
      navigation: { navigate }
    } = this.props
    const { value } = this.state

    return (
      <LinearGradient colors={['#c4f4ff', '#c4f4ff', '#e8863c']} style={styles.linearGradient}>
        <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
          <View style={styles.inputContainer}>
            <Text style={styles.aboveInputText}>ENTER THE 4-DIGIT CODE</Text>
            <TextInput
              placeholderTextColor="#e5e5e5"
              style={styles.textInput}
              keyboardType="number-pad"
              name="value"
              type="number"
              onChangeText={v => this.setState({ value: v })}
              value={value}
              maxLength={4}
            />
            <Text style={styles.underline}>— — — —</Text>
          </View>
          <Button
            style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
            navigate={() => navigate('main')}
          >
            VERIFY CODE
          </Button>
          <TouchableOpacity style={styles.noCodeContainer}>
            <Text style={styles.noCodeText}>I DIDN&apos;T RECEIVE A CODE</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </LinearGradient>
    )
  }
}

export default CodeInput
