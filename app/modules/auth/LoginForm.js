import React, { Component } from 'react'
import { Button, StatusBar, TextInput, View } from 'react-native'
import PropTypes from 'prop-types'

import styles from '../../styles'

export default class LoginForm extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired
    }).isRequired
  }

  state = {
    phoneNumber: ''
  }

  render() {
    const { phoneNumber } = this.state
    const {
      navigation: { navigate }
    } = this.props
    return (
      <View style={styles.formContainer}>
        <StatusBar barStyle="light-content" />
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          placeholderTextColor="rgb(255,255,255)"
          keyboardType="phone-pad"
          returnKeyType="next"
          value={phoneNumber}
          onChangeText={num => this.setState({ phoneNumber: num })}
          onSubmitEditing={() => navigate('Map')}
        />
        <View style={styles.buttonContainer}>
          <Button style={styles.buttonText} title="Login" onPress={() => navigate('Map')} />
        </View>
      </View>
    )
  }
}
