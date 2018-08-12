import React from 'react'
import { Provider } from 'react-redux'

import store from './app/store'
import Root from './app/modules/root'

export default () => (
  <Provider store={store}>
    <Root />
  </Provider>
)

console.ignoredYellowBox = ['Remote debugger']
