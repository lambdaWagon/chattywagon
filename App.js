import React from 'react'
import { Provider } from 'react-redux'

import store from './src/store'
import { AppWithNavState } from './src/navigators'

export default () => (
  <Provider store={store}>
    <AppWithNavState />
  </Provider>
)

console.ignoredYellowBox = ['Remote debugger']
