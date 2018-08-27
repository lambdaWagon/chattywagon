import { combineReducers } from 'redux'

import authentication from './authentication'
import geolocation from './geolocation'
import navigation from './navigation'

export default combineReducers({ authentication, geolocation, navigation })
