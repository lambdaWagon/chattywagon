import { combineReducers } from 'redux'

import authentication from './authentication'
import geolocation from './geolocation'
import navigation from './navigation'
import ui from './ui'

export default combineReducers({ authentication, geolocation, navigation, ui })
