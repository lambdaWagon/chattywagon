import { Platform } from 'react-native'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import devTools from 'remote-redux-devtools'

import { getLocation, watchDrivers, verifyAuth } from '../actions'
import reducers from '../reducers'

export default initialState => {
  const saga = createSagaMiddleware()

  const enhancer = compose(
    applyMiddleware(thunk, saga),
    devTools({ name: Platform.OS, hostname: 'localhost', port: 5678 })
  )

  const store = createStore(reducers, initialState, enhancer)

  store.dispatch(verifyAuth())
  store.dispatch(getLocation())
  saga.run(watchDrivers)

  return store
}
