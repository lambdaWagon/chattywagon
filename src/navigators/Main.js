import React, { Fragment } from 'react'
import { Animated, Dimensions, Easing, StyleSheet } from 'react-native'
import { createDrawerNavigator, createStackNavigator } from 'react-navigation'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import PropTypes from 'prop-types'

import { Dashboard, Help, Payment, Promos, Profile, Rides, Settings } from '../components/dashboard'
import { Map, MapUIConfirm, Search } from '../components/map'
import { MenuButton } from '../components/shared'

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    marginLeft: wp('6%'),
    marginTop: hp('6%'),
    zIndex: 999
  }
})

const MapNavigator = createStackNavigator(
  {
    Map,
    MapUIConfirm,
    Search
  },
  {
    headerMode: 'none',
    transitionConfig: () => ({
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
          outputRange: [height - 200, 0, 0]
        })
        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1]
        })

        return { opacity, transform: [{ translateY }] }
      }
    })
  }
)

export const MainNavigator = createDrawerNavigator(
  {
    Map: MapNavigator,
    Help,
    Payment,
    Promos,
    Profile,
    Rides,
    Settings
  },
  {
    contentComponent: Dashboard,
    contentOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'white'
    }
    // drawerType: 'push-screen'
  }
)

const Main = ({ navigation }) => (
  <Fragment>
    <MenuButton
      drawerState={navigation.state.isDrawerOpen}
      style={styles.button}
      navigate={() => navigation.toggleDrawer()}
    />
    <MainNavigator navigation={navigation} />
  </Fragment>
)

Main.router = MainNavigator.router

Main.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default Main
