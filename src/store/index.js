import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'
import thunk from 'redux-thunk'

import root, { getLocation } from '../actions'
import reducers from '../reducers'
import { navMiddleware } from '../navigators'

export default (() => {
  const saga = createSagaMiddleware()

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk, saga, navMiddleware)))

  saga.run(root)
  store.close = () => store.dispatch(END)
  store.dispatch(getLocation())

  return store
})()
