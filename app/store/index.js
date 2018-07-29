import { Platform } from 'react-native'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import devTools from 'remote-redux-devtools'

import { verifyAuth } from '../actions'
import reducers from '../reducers'

export default initialState => {
  const enhancer = compose(
    applyMiddleware(thunk),
    devTools({ name: Platform.OS, hostname: 'localhost', port: 5678 })
  )

  const store = createStore(reducers, initialState, enhancer)

  store.dispatch(verifyAuth())

  return store
}
