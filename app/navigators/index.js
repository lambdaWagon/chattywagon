import React, { Fragment } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import {
  createDrawerNavigator,
  createSwitchNavigator,
  DrawerItems,
  createStackNavigator
} from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

import { Map, Search } from '../modules/map'
import { CodeInput, PhoneInput, SocialAccount, SocialLogin } from '../modules/auth'
import { Help, Payment, Promos, Profile, Rides, Contact } from '../modules/dashboard'
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
    Map,
    Search,
    Rides,
    Profile,
    Contact
    // TODO implement below at later date
    // Help,
    // Payment,
    // Promos,
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

export const AuthNavigator = createStackNavigator({
  SplashScreen,
  PhoneInput,
  CodeInput,
  SocialAccount,
  SocialLogin
})

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
    }
  }
)
