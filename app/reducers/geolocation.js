import * as types from '../constants'

const initialState = {
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
  pickupLocationSet: false,
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
    case types.ADD_DRIVER_SUCCESS:
      return { ...state, drivers: [...state.drivers, action.driver] }
    case types.FETCH_DRIVER_SUCCESS:
      return {
        ...state,
        drivers: state.drivers.map(d => (d.key === action.driver.key ? action.driver : d))
      }
    case types.GET_LOCATION:
      return {
        ...state,
        currentLocation: action.currentLocation,
        region: action.region,
        locationSet: true
      }
    case types.SET_DESTINATION:
      return {
        ...state,
        destination: { ...state.destination, ...action.destination },
        destinationSet: true
      }
    case types.SET_PICKUP:
      return {
        ...state,
        pickupLocation: { ...state.pickupLocation, ...action.pickupLocation },
        pickupLocationSet: true
      }
    default:
      return state
  }
}
