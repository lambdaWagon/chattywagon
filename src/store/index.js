import { Platform } from 'react-native'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'
import thunk from 'redux-thunk'
import devTools from 'remote-redux-devtools'

import root, { getLocation } from '../actions'
import reducers from '../reducers'

export default (initialState => {
  const saga = createSagaMiddleware()

  const enhancer = compose(
    applyMiddleware(thunk, saga),
    devTools({ name: Platform.OS, hostname: 'localhost', port: 8080 })
  )

  const store = createStore(reducers, initialState, enhancer)

  saga.run(root)
  store.close = () => store.dispatch(END)
  store.dispatch(getLocation())

  return store
})()
