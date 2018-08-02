import React from 'react'
import { Provider } from 'react-redux'

import store from './app/store'
import Root from './app/modules/root/Root'

export default () => (
  <Provider store={store}>
    <Root />
  </Provider>
)

console.ignoredYellowBox = ['Remote debugger']
