import { buffers, eventChannel } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'
import { Dimensions } from 'react-native'

import { config, geoFire } from '../config/firebase'
import * as types from '../constants'
import { getRegionFromPoint } from '../components/map/utils'

const { height, width } = Dimensions.get('window')
const aspectRatio = width / height

/* prod: get region from currentLocation */
const geoQuery = geoFire.query({
  center: [37.786279, -122.406456],
  radius: 10
})

const handleErrors = (d, error) => d({ type: types.ERROR, error })

export const getLocation = () => dispatch => {
  async function success({ coords: { latitude, longitude } }) {
    const qs = `key=${config.apiKey}&latlng=${latitude},${longitude}`
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?${qs}`)
    const { results } = await response.json()
    const region = getRegionFromPoint(latitude, longitude, aspectRatio)
    dispatch({
      type: types.SET_LOCATION,
      currentLocation: {
        latitude,
        longitude,
        address: results[0].formatted_address,
        place_id: results[0].place_id
      },
      region
    })
  }

  const options = { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }

  navigator.geolocation.getCurrentPosition(success, e => handleErrors(dispatch, e), options)
}

export const setDestination = destination => ({ type: types.SET_DESTINATION, destination })

export const setPickup = pickupLocation => ({ type: types.SET_PICKUP, pickupLocation })

export const setDirections = directions => ({ type: types.SET_DIRECTIONS, directions })

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
