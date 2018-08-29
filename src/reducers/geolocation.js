import * as types from '../constants'

const initialState = {
  drivers: [],
  directions: {
    coordinates: null,
    distance: null,
    duration: null
  },
  currentLocation: {},
  currentLocationSet: false,
  region: {
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0
  },
  destination: {},
  destinationSet: false,
  pickupLocation: {},
  pickupLocationSet: false
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
    case types.SET_LOCATION:
      return {
        ...state,
        currentLocation: action.currentLocation,
        region: action.region,
        currentLocationSet: true
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
    case types.SET_DIRECTIONS:
      return { ...state, directions: action.directions }
    case types.RESET_DIRECTIONS:
      return {
        ...state,
        directions: {
          coordinates: null,
          distance: null,
          duration: null
        },
        destination: {},
        destinationSet: false,
        pickupLocation: {},
        pickupLocationSet: false
      }
    default:
      return state
  }
}
