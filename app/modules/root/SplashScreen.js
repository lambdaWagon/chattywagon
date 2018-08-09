import React, { Component } from 'react'
import { ImageBackground, Text, View } from 'react-native'
import { LinearGradient } from 'expo'
import PropTypes from 'prop-types'

import Button from '../common/Button'
import styles from '../../styles'

const bg = require('../../../assets/splash.png')

export default class SplashScreen extends Component {
  static navigationOptions = { header: null }

  static propTypes = {
    navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired
  }

  onPress = () => this.props.navigation.navigate('Login')

  onLayout = e => console.log(e.nativeEvent.layout)

  render() {
    return (
      <ImageBackground onLayout={this.onLayout} source={bg} style={styles.container}>
        <LinearGradient
          colors={[
            'rgba(196,244,255,0.8)',
            'rgba(196,244,255,0.8)',
            'rgba(232,134,60,0.8)',
            'rgba(232,134,60,0.8)'
          ]}
          style={styles.gradient}
        >
          <View style={styles.logoContainer}>
            <Text style={styles.logo}>ChattyWagon</Text>
          </View>
          <View style={{ height: '30%' }}>
            <Button navigate={this.onPress}>GET A RIDE</Button>
          </View>
        </LinearGradient>
      </ImageBackground>
    )
  }
}
