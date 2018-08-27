import React, { Component } from 'react'
import { AsyncStorage, ImageBackground, Text, View } from 'react-native'
import PropTypes from 'prop-types'

import { Button } from '../shared'
import styles from '../../styles'

const bg = require('../../../assets/splash.png')

export default class SplashScreen extends Component {
  static propTypes = {
    navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired
  }

  async componentDidMount() {
    const user = await AsyncStorage.getItem('user_data')
    if (user) this.props.navigation.navigate('Main')
  }

  onPress = () => this.props.navigation.navigate('PhoneInput')

  render() {
    return (
      <ImageBackground source={bg} style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>ChattyWagon</Text>
        </View>
        <View style={styles.splashButtonContainer}>
          <Button navigate={this.onPress}>GET A RIDE</Button>
        </View>
      </ImageBackground>
    )
  }
}
