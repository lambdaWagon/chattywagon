import React, { Fragment } from 'react'
import { Animated, Easing, Image, StyleSheet, View } from 'react-native'
import { createDrawerNavigator, createSwitchNavigator, DrawerItems } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

import { Map, Search } from '../modules/map'
import { CodeInput, PhoneInput, SocialAccount, SocialLogin } from '../modules/auth'
import { Help, Payment, Promos, Profile, Rides, Settings, Contact } from '../modules/dashboard'
import SplashScreen from '../modules/root/SplashScreen'

const style = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    paddingTop: 75,
    backgroundColor: '#ff8200'
  },
  drawerView: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'center'
  },
  drawerImage: { height: 100, width: 100 }
})

const Dashboard = props => (
  <View style={style.drawerContainer}>
    <View style={style.drawerView}>
      <Image style={style.drawerImage} source={require('../../assets/avatarplaceholder.png')} />
    </View>
    <DrawerItems {...props} />
  </View>
)

const DrawerNavigation = createDrawerNavigator(
  {
    // Map,
    // Search,
    // Help,
    // Payment,
    // Promos,
    Profile
    // Rides,
    // Contact
    // Settings
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
      style={{ position: 'absolute', marginLeft: wp('7%'), marginTop: hp('5%'), zIndex: 999 }}
      onPress={() => navigation.toggleDrawer()}
    />
    <DrawerNavigation navigation={navigation} />
  </Fragment>
)

DrawerWrapper.router = DrawerNavigation.router

export const AuthNavigator = createSwitchNavigator({
  SplashScreen,
  PhoneInput,
  CodeInput,
  SocialAccount,
  SocialLogin
  // Login,
})

// const StackNavigator = createSwitchNavigator({
//   Home,
//   PhoneInput,
//   CodeInput,
//   SocialAccount,
//   SocialLogin,
// })

export const AppNavigator = createSwitchNavigator(
  {
    // auth: AuthNavigator,
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
