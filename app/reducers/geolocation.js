import { GET_DRIVERS, GET_LOCATION, SET_PICKUP, SET_DESTINATION } from '../constants'

const initialState = {
  address: '',
  drivers: [],
  currentLocation: {},
  locationSet: false,
  region: {
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0
  },
  pickupLocation: {
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0
  },
  destination: {
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0
  },
  destinationSet: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DRIVERS:
      return { ...state, drivers: action.drivers }
    case GET_LOCATION:
      return {
        ...state,
        currentLocation: action.currentLocation,
        region: action.region,
        locationSet: true
      }
    case 'DRIVER_UPDATED':
      return {
        ...state,
        drivers: state.drivers.map(
          driver =>
            driver.id === action.key
              ? { id: action.key, latitude: action.location[0], longitude: action.location[1] }
              : driver
        )
      }
    case 'SET_ADDRESS':
      return { ...state, address: action.address, destinationSet: true }
    case SET_DESTINATION:
      return { ...state, destination: action.destination, destinationSet: true }
    case SET_PICKUP:
      return { ...state, pickupLocation: action.pickupLocation }
    default:
      return state
  }
}
