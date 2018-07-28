import { GET_DRIVERS, GET_LOCATION, SET_PICKUP, SET_DESTINATION } from '../actions';

const initialState = {
  drivers: [],
  pos: null,
  region: {
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0,
  },
  pickupLocation: {
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0,
  },
  destination: {
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0,
  },
  destinationSet: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DRIVERS:
      return { ...state, drivers: action.drivers, region: action.region };
    case GET_LOCATION:
      return { ...state, pos: action.pos };
    case SET_DESTINATION:
      return { ...state, destination: action.destination, destinationSet: true };
    case SET_PICKUP:
      return { ...state, pickupLocation: action.pickupLocation };
    default:
      return state;
  }
};
