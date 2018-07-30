import { Dimensions } from 'react-native'
import { buffers, eventChannel } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'

import { database, geoFire } from '../config/firebase'
import { getRegionFromPoint } from '../modules/map/utils'
import * as types from '../constants'

const { width, height } = Dimensions.get('window')
const aspectRatio = width / height

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
      const region = getRegionFromPoint(latitude, longitude, aspectRatio)
      dispatch({ type: types.GET_LOCATION, currentLocation, region })
    },
    error => {
      console.log(error)
      dispatch(handleErrors(error))
    },
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  )
}

// export const getDrivers = () => async dispatch => {
//   try {
//     const snapshot = await database.ref('driverLocations').once('value')
//     if (snapshot) {
//       const drivers = Object.entries(snapshot.val()).map(([k, v]) => ({
//         id: k,
//         latitude: v.l[0],
//         longitude: v.l[1]
//       }))
//       // console.log('🚕 DRIVERS', drivers)
//       dispatch({ type: types.GET_DRIVERS, drivers })
//     }
//   } catch (error) {
//     console.log(error)
//     dispatch(handleErrors(error))
//   }
// }

export const setPickupLocation = ({
  nativeEvent: {
    coordinate: { latitude, longitude }
  }
}) => dispatch => {
  const pickupLocation = getRegionFromPoint(latitude, longitude, 300)
  dispatch({ type: types.SET_PICKUP, pickupLocation })
}

export const setDestination = ({
  nativeEvent: {
    coordinate: { latitude, longitude }
  }
}) => dispatch => {
  // const destination = getRegionFromPoint(latitude, longitude, 300)
  const destination = { latitude, longitude }
  dispatch({ type: types.SET_DESTINATION, destination })
}

export const setAddress = address => ({ type: 'SET_ADDRESS', address })

const addDriver = ({ key, location, distance }) => {
  console.log('🚕', key, location, distance)
  const driver = { key, latitude: location[0], longitude: location[1], distance }
  return { type: 'ADD_DRIVER_SUCCESS', driver }
}

const updateDriver = ({ key, location, distance }) => {
  console.log('🚕', key, location, distance)
  const driver = { key, latitude: location[0], longitude: location[1], distance }
  return { type: 'FETCH_DRIVER_SUCCESS', driver }
}

const removeDriver = key => {
  console.log('🔑', key)
  return { type: 'REMOVE_DRIVER_SUCCESS', key }
}

function subscribe(buffer) {
  return eventChannel(emit => {
    geoQuery.on('key_entered', (key, location, distance) =>
      emit(addDriver({ key, location, distance }))
    )
    geoQuery.on('key_moved', (key, location, distance) =>
      emit(updateDriver({ key, location, distance }))
    )
    geoQuery.on('key_exited', key => emit(removeDriver(key)))
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

// export const updateDrivers = () => {
// TO-DO: redux-saga
// console.log(getState().geolocation.currentLocation)
// const query = geoFire.query({
//   center: [0, 0],
//   radius: 10
// })
// await query.on('key_moved', (key, location, distance) => {
//   dispatch({ type: 'DRIVER_UPDATED', key, location })
//   console.log(`${key} moved within query to ${location} ${distance} km from center`)
// })
// await query.on('key_exited', (key, location, distance) => {
//   console.log(`${key} exited query to ${location} ${distance} km from center`)
// })

// async componentDidMount() {
//   const query = geoFire.query({
//     center: [37.786279, -122.406456],
//     radius: 10
//   })
//   await query.on('key_moved', (key, location, distance) => {
//     this.onDriverChange(key, location)
//     console.log(`${key} moved within query to ${location} ${distance} km from center`)
//   })
//   await query.on('key_exited', (key, location, distance) => {
//     console.log(`${key} exited query to ${location} ${distance} km from center`)
//   })
// }

// onDriverChange = (key, location) => {
//   const { drivers } = this.props

//   const updatedDrivers = drivers.map(driver => (driver.id === key
//     ? { id: key, latitude: location[0], longitude: location[1] }
//     : driver))
//   this.setState({ updatedDrivers })
// }
