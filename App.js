import React from 'react'
import { Provider } from 'react-redux'
// import { createStackNavigator } from 'react-navigation'
import { FluidNavigator } from 'react-navigation-fluid-transitions'

import store from './app/redux'
import { Map } from './app/modules/map'
import { Login, SplashScreen } from './app/modules/auth'
import { Search } from './app/components'

export default () => (
  <Provider store={store}>
    <StackNavigator />
  </Provider>
)

console.ignoredYellowBox = ['Remote debugger']

const StackNavigator = FluidNavigator({
  Map,
  Search,
  SplashScreen,
  Login
})
