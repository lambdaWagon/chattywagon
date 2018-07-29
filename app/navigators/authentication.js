import { createStackNavigator } from 'react-navigation'
// import { FluidNavigator } from 'react-navigation-fluid-transitions'

import { Login } from '../modules/auth'
import SplashScreen from '../modules/root/SplashScreen'

export default createStackNavigator({
  SplashScreen,
  Login
})
