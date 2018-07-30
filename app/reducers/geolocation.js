import * as types from '../constants'

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
    case 'ADD_DRIVER_SUCCESS':
      return { ...state, drivers: [...state.drivers, action.driver] }
    case 'FETCH_DRIVER_SUCCESS':
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
    case 'SET_ADDRESS':
      return { ...state, address: action.address, destinationSet: true }
    // case SET_DESTINATION:
    //   return { ...state, destination: action.destination, destinationSet: true }
    // case SET_PICKUP:
    //   return { ...state, pickupLocation: action.pickupLocation }
    default:
      return state
  }
}
