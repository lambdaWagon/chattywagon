import { buffers, eventChannel } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'

import { geoFire } from '../config/firebase'
import * as types from '../constants'

const geoQuery = geoFire.query({
  center: [37.786279, -122.406456],
  radius: 10
})

const handleErrors = error => ({ type: types.ERROR, error })

export const getLocation = () => dispatch => {
  navigator.geolocation.getCurrentPosition(
    ({ coords: { latitude, longitude } }) => {
      // console.log('📍 CURRENT LOCATION', latitude, longitude)
      const currentLocation = { latitude, longitude }
      // const region = getRegionFromPoint(latitude, longitude, aspectRatio)
      dispatch({ type: types.GET_LOCATION, currentLocation })
    },
    error => {
      console.log(error)
      dispatch(handleErrors(error))
    },
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  )
}

export const setDestination = dest => {
  const { description, place_id, structured_formatting } = dest
  const destination = { description, place_id, structured_formatting }
  return { type: types.SET_DESTINATION, destination }
}

export const setPickup = pickup => {
  const { description, place_id, structured_formatting } = pickup
  const pickupLocation = { description, place_id, structured_formatting }
  return { type: types.SET_PICKUP, pickupLocation }
}

const updateDriver = (type, { key, location, distance }) => ({
  type,
  driver: { key, latitude: location[0], longitude: location[1], distance }
})

function subscribe(buffer) {
  return eventChannel(emit => {
    geoQuery.on('key_entered', (key, location, distance) => {
      emit(updateDriver(types.ADD_DRIVER_SUCCESS, { key, location, distance }))
    })
    geoQuery.on('key_moved', (key, location, distance) => {
      emit(updateDriver(types.FETCH_DRIVER_SUCCESS, { key, location, distance }))
    })
    geoQuery.on('key_exited', key => emit({ type: 'REMOVE_DRIVER_SUCCESS', key }))
    return () => geoQuery.cancel()
  }, buffer)
}

export function* watchDrivers() {
  const buffer = buffers.expanding()
  const channel = yield call(subscribe, buffer)

  while (true) {
    const action = yield take(channel)
    yield put(action)
  }
}
