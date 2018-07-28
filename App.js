import React from 'react'
import { Provider } from 'react-redux'
import { createStackNavigator } from 'react-navigation'

import store from './app/redux'
import { Map } from './app/modules/map'
import { Login, SplashScreen } from './app/modules/auth'

export default () => (
  <Provider store={store}>
    <StackNavigator />
  </Provider>
)

console.ignoredYellowBox = ['Remote debugger']

const StackNavigator = createStackNavigator({
  Map,
  SplashScreen,
  Login
})
