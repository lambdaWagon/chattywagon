import React from 'react'
import { Text, TextInput, View } from 'react-native'
import PropTypes from 'prop-types'

import { checker } from '../../styles'

import { Button, Gradient } from '../shared'
import { Email, Password } from '../shared/icons'
import styles from '../../styles'

let passwordInput

const SocialLogin = ({ navigation: { navigate } }) => (
  <Gradient keyboard>
    <View style={styles.authContainer}>
      <Text style={styles.inputHeader}>EMAIL</Text>
      <View style={styles.inputRow}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          autoFocus
          keyboardType="email-address"
          onSubmitEditing={() => passwordInput.focus()}
          placeholder="name@mail.com"
          returnKeyType="next"
          style={styles.socialInput}
        />
        <Email />
      </View>
      <View style={styles.line} />
      <Text style={styles.inputHeader}>PASSWORD</Text>
      <View style={styles.inputRow}>
        <TextInput
          placeholder="• • • • • • •"
          returnKeyType="go"
          secureTextEntry
          ref={r => (passwordInput = r)}
          style={styles.socialInput}
        />
        <Password />
      </View>
    </View>
    <Button style={styles.authButton} navigate={() => navigate('SocialAccount')}>
      SIGN IN
    </Button>
  </Gradient>
)

SocialLogin.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
}

export default SocialLogin
