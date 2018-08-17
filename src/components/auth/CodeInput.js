import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
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
    marginBottom: 16
  },
  textInput: {
    fontSize: 20,
    fontFamily: 'black',
    letterSpacing: 40,
    marginLeft: 5,
    height: 30,
    zIndex: 2
  },
  underline: {
    fontSize: 20,
    color: '#e5e5e5',
    top: 66,
    left: 25,
    position: 'absolute',
    letterSpacing: 13,
    zIndex: 1
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
    const { value } = this.state
    const {
      navigation: { navigate }
    } = this.props

    return (
      <Gradient>
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
          navigate={() => navigate('Main')}
        >
          VERIFY CODE
        </Button>
        <TouchableOpacity style={styles.noCodeContainer}>
          <Text style={styles.noCodeText}>I DIDN&apos;T RECEIVE A CODE</Text>
        </TouchableOpacity>
      </Gradient>
    )
  }
}

export default CodeInput
