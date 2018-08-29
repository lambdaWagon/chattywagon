import React, { Fragment } from 'react'
import { Animated, Easing } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { Map, MapUIConfirm, Search } from '../components/map'
import { BackButton } from '../components/shared'
import * as actions from '../actions'
import styles from '../styles'

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

const MapNavigator = ({ resetDirections, navigation }) => {
  if (navigation.state.index > 0) {
    return (
      <Fragment>
        <BackButton navigate={resetDirections} style={styles.menuButton} />
        <Navigator navigation={navigation} />
      </Fragment>
    )
  }
  return <Navigator navigation={navigation} />
}

MapNavigator.router = Navigator.router

MapNavigator.propTypes = {
  navigation: PropTypes.object.isRequired,
  resetDirections: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(MapNavigator)
