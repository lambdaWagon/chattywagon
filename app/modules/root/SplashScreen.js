import React, { Component } from 'react'
import { Button, ImageBackground, View } from 'react-native'
import { LinearGradient } from 'expo'
import PropTypes from 'prop-types'

// import { auth } from '../../config/firebase'
import styles from '../../styles'

const bg = require('../../../assets/splash.png')

export default class SplashScreen extends Component {
  static navigationOptions = { header: null }

  static propTypes = {
    navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired
  }

  onLayout = e => {
    console.log(e.nativeEvent.layout)
  }

  render() {
    const {
      navigation: { navigate }
    } = this.props
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
            <Button title="Get Started →" onPress={() => navigate('Login')} />
          </View>
        </LinearGradient>
      </ImageBackground>
    )
  }
}
