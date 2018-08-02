import { fork, all } from 'redux-saga/effects'

import { watchUserAuth } from './authentication'
import { watchDrivers } from './geolocation'

export default function* root() {
  yield all([fork(watchUserAuth), fork(watchDrivers)])
}

export * from './authentication'
export * from './geolocation'
