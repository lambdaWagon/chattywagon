import React, { Component } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types'

import { Button, Gradient } from '../shared'
import { Phone } from '../shared/icons'
import styles from '../../styles'

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
      <Gradient keyboard>
        <View style={styles.authContainer}>
          <Text style={styles.inputHeader}>ENTER YOUR PHONE NUMBER</Text>
          <View style={[styles.inputRow, { marginRight: 20 }]}>
            <TextInput
              placeholder="(555) 555-5555"
              placeholderTextColor="#e5e5e5"
              style={styles.inputText}
              keyboardType="number-pad"
              name="phoneNum"
              type="number"
              onChangeText={this.handleInput}
              value={input}
              maxLength={14}
            />
            <Phone />
          </View>
          <Text style={styles.inputFooter}>We&apos;ll text a code to verify your phone</Text>
        </View>
        <Button style={styles.authButton} navigate={() => navigate('CodeInput')}>
          GET CODE
        </Button>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigate('SocialAccount')}>
          <Text style={styles.footerText}>OR CONNECT USING A SOCIAL ACCOUNT </Text>
        </TouchableOpacity>
      </Gradient>
    )
  }
}

export default PhoneInput
