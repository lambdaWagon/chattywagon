import React, { Fragment } from 'react'
import { Animated, Easing, StyleSheet } from 'react-native'
import { createDrawerNavigator, createSwitchNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import PropTypes from 'prop-types'

import { Map, Search } from '../modules/map'
import { CodeInput, PhoneInput, SocialAccount, SocialLogin } from '../modules/auth'
import { Dashboard, Help, Payment, Promos, Profile, Rides, Settings } from '../modules/dashboard'
import SplashScreen from '../modules/root/SplashScreen'
import BackButton from '../modules/common/BackButton'

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    marginLeft: wp('7%'),
    marginTop: hp('7%'),
    zIndex: 999
  }
})

const DrawerNavigator = createDrawerNavigator(
  {
    Map,
    Help,
    Payment,
    Promos,
    Profile,
    Rides,
    Settings,
    Search
  },
  {
    contentComponent: Dashboard,
    contentOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'white'
    },
    drawerType: 'push-screen'
  }
)

export const DrawerWrapper = ({ navigation }) => (
  <Fragment>
    <Icon
      name="bars"
      size={wp('7.5%')}
      color="black"
      style={styles.button}
      onPress={() => navigation.toggleDrawer()}
    />
    <DrawerNavigator navigation={navigation} />
  </Fragment>
)

DrawerWrapper.router = DrawerNavigator.router
DrawerWrapper.propTypes = { navigation: PropTypes.object.isRequired }

export const AuthNavigator = createSwitchNavigator({
  PhoneInput,
  CodeInput,
  SocialAccount,
  SocialLogin
})

export const AuthWrapper = ({ navigation }) => {
  const { index } = navigation.state
  const previous = navigation.state.routes[index - 1]

  return (
    <Fragment>
      {index > 0 && (
        <BackButton style={styles.button} navigate={() => navigation.navigate(previous)} />
      )}
      <AuthNavigator navigation={navigation} />
    </Fragment>
  )
}

AuthWrapper.router = AuthNavigator.router
AuthWrapper.propTypes = { navigation: PropTypes.object.isRequired }

export const AppNavigator = createSwitchNavigator(
  {
    SplashScreen,
    auth: AuthWrapper,
    main: DrawerWrapper
  },
  {
    headerMode: 'none',
    mode: 'modal',
    navigationOptions: {
      gesturesEnabled: false
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
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
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1]
        })

        return { opacity, transform: [{ translateY }] }
      }
    })
  }
)
