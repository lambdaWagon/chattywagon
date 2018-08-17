import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types'

import { Button, Gradient } from '../shared'
import styles from '../../styles'

class CodeInput extends React.Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired
    }).isRequired
  }

  state = { value: '' }

  render() {
    const { value } = this.state
    const {
      navigation: { navigate }
    } = this.props

    return (
      <Gradient keyboard>
        <View style={[styles.authContainer, { height: 125 }]}>
          <Text style={styles.inputHeader}>ENTER THE 4-DIGIT CODE</Text>
          <TextInput
            placeholderTextColor="#e5e5e5"
            style={[styles.inputText, { marginLeft: 5, letterSpacing: 40, zIndex: 2 }]}
            keyboardType="number-pad"
            name="value"
            type="number"
            onChangeText={v => this.setState({ value: v })}
            value={value}
            maxLength={4}
          />
          <Text pointerEvents="none" style={styles.underline}>
            — — — —
          </Text>
        </View>
        <Button style={styles.authButton} navigate={() => navigate('Main')}>
          VERIFY CODE
        </Button>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerText}>I DIDN&apos;T RECEIVE A CODE</Text>
        </TouchableOpacity>
      </Gradient>
    )
  }
}

export default CodeInput
