import { combineReducers } from 'redux'

import authentication from './authentication'
import geolocation from './geolocation'

export default combineReducers({ authentication, geolocation })
