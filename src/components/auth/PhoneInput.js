import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Icon from 'react-native-vector-icons/FontAwesome'
import PropTypes from 'prop-types'

import { Button, Gradient } from '../shared'

const styles = StyleSheet.create({
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
    marginBottom: 10
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 10
  },
  textInput: {
    fontSize: 20,
    fontFamily: 'black',
    letterSpacing: 1.5,
    width: '100%'
  },
  belowInputText: {
    marginTop: 15,
    fontSize: 10,
    letterSpacing: 1
  },
  socialContainer: {
    marginTop: 20,
    width: 294
  },
  socialText: {
    textAlign: 'center',
    fontFamily: 'black',
    fontSize: 10,
    letterSpacing: 1.5
  },
  button: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0
  }
})

class PhoneInput extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired
    }).isRequired
  }

  state = { input: '' }

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
    const { input } = this.state
    const {
      navigation: { navigate }
    } = this.props

    return (
      <Gradient>
        <View style={styles.inputContainer}>
          <Text style={styles.aboveInputText}>ENTER YOUR PHONE NUMBER</Text>
          <View style={styles.inputRow}>
            <TextInput
              placeholder="(555) 555-5555"
              placeholderTextColor="#e5e5e5"
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
          <Text style={styles.belowInputText}>We&apos;ll text a code to verify your phone</Text>
        </View>
        <Button style={styles.button} navigate={() => navigate('CodeInput')}>
          GET CODE
        </Button>
        <TouchableOpacity style={styles.socialContainer} onPress={() => navigate('SocialAccount')}>
          <Text style={styles.socialText}>OR CONNECT USING A SOCIAL ACCOUNT </Text>
        </TouchableOpacity>
      </Gradient>
    )
  }
}

export default PhoneInput
