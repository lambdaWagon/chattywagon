import React, { Fragment } from 'react'
import { Animated, Easing, StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import PropTypes from 'prop-types'

import { Map, MapUIConfirm, Search } from '../components/map'
import { BackButton } from '../components/shared'

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    marginLeft: wp('6%'),
    /* temporary position */
    marginTop: hp('50%'),
    zIndex: 999
  }
})

const transitionConfig = () => ({
  transitionSpec: {
    duration: 500,
    easing: Easing.out(Easing.poly(4)),
    timing: Animated.timing
  },
  screenInterpolator: sceneProps => {
    const { layout, position, scene } = sceneProps
    const { index } = scene
    const height = layout.initHeight
    const translateY = position.interpolate({
      inputRange: [index - 1, index, index + 1],
      outputRange: [height, 0, 0]
    })
    const opacity = position.interpolate({
      inputRange: [index - 1, index - 1, index],
      outputRange: [0, 0.25, 1]
    })

    return { opacity, transform: [{ translateY }] }
  }
})

const Navigator = createStackNavigator(
  {
    Map,
    Search,
    MapUIConfirm
  },
  {
    headerMode: 'none',
    mode: 'modal',
    cardStyle: {
      backgroundColor: 'transparent',
      opacity: 1
    },
    transitionConfig
  }
)

const MapNavigator = ({ navigation }) => {
  // console.log('📍 map nav', navigation.state)
  const { state, goBack } = navigation
  const nav = {
    ...navigation,
    dismiss: () => goBack(state.key)
  }
  return (
    <Fragment>
      <BackButton navigate={() => goBack(null)} style={styles.button} />
      <Navigator navigation={nav} />
    </Fragment>
  )
}

MapNavigator.router = Navigator.router

MapNavigator.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default MapNavigator
