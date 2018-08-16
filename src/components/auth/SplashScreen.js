import React, { Component } from 'react'
import { ImageBackground, Text, View } from 'react-native'
import PropTypes from 'prop-types'

import Button from '../shared/Button'
import styles from '../../styles'

const bg = require('../../../assets/splash.png')

export default class SplashScreen extends Component {
  static navigationOptions = { header: null }

  static propTypes = {
    navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired
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
