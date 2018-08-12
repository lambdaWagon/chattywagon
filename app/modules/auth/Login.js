import React, { Component } from 'react'
import { Button, KeyboardAvoidingView, View } from 'react-native'
import { LinearGradient } from 'expo'
import PropTypes from 'prop-types'

// import LoginForm from './LoginForm'
import { auth } from '../../config/firebase'
import { signInWithFacebook } from './utils'
import styles from '../../styles'

export default class Login extends Component {
  static navigationOptions = {
    header: null
  }

  // static propTypes = {
  //   navigation: PropTypes.shape({
  //     navigate: PropTypes.func.isRequired
  //   }).isRequired
  // }

  render() {
    // const { navigation } = this.props
    return (
      <LinearGradient colors={['#c4f4ff', '#c4f4ff', '#e8863c', '#e8863c']} style={styles.gradient}>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <View style={styles.loginContainer}>
            <Button title="Facebook Login" onPress={signInWithFacebook} />
            <Button title="Facebook Logout" onPress={() => auth.signOut()} />
          </View>
          <View>{/* <LoginForm navigation={navigation} /> */}</View>
        </KeyboardAvoidingView>
      </LinearGradient>
    )
  }
}
