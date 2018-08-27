import { combineReducers } from 'redux'
import { createNavigationReducer } from 'react-navigation-redux-helpers'

import authentication from './authentication'
import geolocation from './geolocation'
import { RootNavigator } from '../navigators'

const navigation = createNavigationReducer(RootNavigator)

export default combineReducers({ authentication, geolocation, navigation })
