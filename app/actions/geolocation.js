import { Dimensions } from 'react-native'

import { database, geoFire } from '../config/firebase'
import { getRegionFromPoint } from '../modules/map/utils'
import * as ActionType from '../constants'

const { width, height } = Dimensions.get('window')
const aspectRatio = width / height

const handleErrors = error => ({ type: ActionType.ERROR, error })

export const getLocation = () => dispatch => {
  navigator.geolocation.getCurrentPosition(
    ({ coords: { latitude, longitude } }) => {
      // console.log('📍 CURRENT LOCATION', latitude, longitude)
      const currentLocation = { latitude, longitude }
      const region = getRegionFromPoint(latitude, longitude, aspectRatio)
      dispatch({ type: ActionType.GET_LOCATION, currentLocation, region })
    },
    error => {
      console.log(error)
      dispatch(handleErrors(error))
    },
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  )
}

export const getDrivers = () => async dispatch => {
  try {
    const snapshot = await database.ref('driverLocations').once('value')
    if (snapshot) {
      const drivers = Object.entries(snapshot.val()).map(([k, v]) => ({
        id: k,
        latitude: v.l[0],
        longitude: v.l[1]
      }))
      // console.log('🚕 DRIVERS', drivers)
      dispatch({ type: ActionType.GET_DRIVERS, drivers })
    }
  } catch (error) {
    console.log(error)
    dispatch(handleErrors(error))
  }
}

export const updateDrivers = () => {
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
}

export const setPickupLocation = ({
  nativeEvent: {
    coordinate: { latitude, longitude }
  }
}) => dispatch => {
  const pickupLocation = getRegionFromPoint(latitude, longitude, 300)
  dispatch({ type: ActionType.SET_PICKUP, pickupLocation })
}

export const setDestination = ({
  nativeEvent: {
    coordinate: { latitude, longitude }
  }
}) => dispatch => {
  // const destination = getRegionFromPoint(latitude, longitude, 300)
  const destination = { latitude, longitude }
  dispatch({ type: ActionType.SET_DESTINATION, destination })
}

export const setAddress = address => ({ type: 'SET_ADDRESS', address })
