import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

import styles from '../../styles'

import avatarPlaceholder from '../../../assets/avatarplaceholder.png'

const { height, width } = Dimensions.get('window')

class Profile extends React.Component {
  state = {
    username: 'John Huggett',
    number: '(777) 777-7777',
    email: 'fake@fake.com',
    avatarImg: avatarPlaceholder,
    display: true
  }

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
    const number = this.phoneNumberFormatter(i)
    this.setState({ number })
  }

  render() {
    return (
      <KeyboardAvoidingView
        enabled
        behavior="padding"
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
        keyboardVerticalOffset={Platform.OS === 'ios' && height === 812 ? 300 : 333}
      >
        <View style={styles.profileContainer}>
          <View style={styles.avatarContainer}>
            <Image
              style={this.state.display ? styles.image : styles.imageWithKeyboard}
              source={this.state.avatarImg}
            />
            <View style={styles.inputContainer}>
              <TouchableOpacity style={styles.editTouch}>
                <Text style={styles.editText}>edit</Text>
                <Icon name="pencil" size={12} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              onChangeText={username => this.setState({ username })}
              value={this.state.username}
              onFocus={() => this.setState({ display: false })}
              onBlur={() => this.setState({ display: true })}
            />

            <Icon name="pencil" size={12} color="black" />
          </View>
          <Text style={styles.text}>name</Text>
          <View style={styles.inputContainer}>
            <TextInput
              onChangeText={this.handleInput}
              style={styles.input}
              value={this.state.number}
              maxLength={14}
              onFocus={() => this.setState({ display: false })}
              onBlur={() => this.setState({ display: true })}
            />
            <Icon name="pencil" size={12} color="black" />
          </View>
          <Text style={styles.text}>phone number</Text>

          <View style={styles.inputContainer}>
            <TextInput
              onChangeText={email => this.setState({ email })}
              style={styles.input}
              value={this.state.email}
              onFocus={() => this.setState({ display: false })}
              onBlur={() => this.setState({ display: true })}
            />
            <Icon name="pencil" size={12} color="black" />
          </View>
          <Text style={styles.text}>email</Text>

          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
              shadowColor="black"
              shadowOffset={{ width: 10, height: 10 }}
              style={styles.buttonContainer}
            >
              <Text style={{ color: 'white' }}>Delete Account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

export default Profile
