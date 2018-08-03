import { createStackNavigator } from 'react-navigation'

import { Map, Search } from '../modules/map'
import { Login } from '../modules/auth'
import SplashScreen from '../modules/root/SplashScreen'

export const AppNavigator = createStackNavigator({ Map, Search })
export const AuthNavigator = createStackNavigator({ SplashScreen, Login })
