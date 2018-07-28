import { Platform } from 'react-native'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import devTools from 'remote-redux-devtools'

import reducers from './reducers'

const enhancer = compose(
  applyMiddleware(thunk),
  devTools({ name: Platform.OS, hostname: 'localhost', port: 5678 })
)

export default createStore(reducers, enhancer)
