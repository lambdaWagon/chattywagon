import { combineReducers } from 'redux'

import authentication from './authentication'
import errors from './errors'
import geolocation from './geolocation'

export default combineReducers({ authentication, errors, geolocation })
