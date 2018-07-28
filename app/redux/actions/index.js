import * as ActionType from '../constants'
import { database, geoFire } from '../../config/firebase'
import { getRegionFromPoint } from '../../modules/map/utils'

const query = geoFire.query({
  center: [35.04563, -85.30968],
  radius: 10
})

export const getLocation = () => dispatch => {
  navigator.geolocation.getCurrentPosition(
    ({ coords: { latitude, longitude } }) => {
      const currentLocation = { latitude, longitude }
      const region = getRegionFromPoint(latitude, longitude, 1000)
      dispatch({ type: ActionType.GET_LOCATION, currentLocation, region })
    },
    error => {
      console.log(error)
      dispatch({ type: ActionType.ERROR, error })
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
      dispatch({ type: ActionType.GET_DRIVERS, drivers })
    }
  } catch (error) {
    console.log(error)
    dispatch({ type: ActionType.ERROR, error })
  }
}

export const updateDrivers = () => {
  // async componentDidMount() {
  //   const query = await geoFire.query({
  //     center: [35.04563, -85.30968],
  //     radius: 10,
  //   });
  //   await query.on('key_moved', (key, location, distance) => {
  //     this.onChildChange(key, location);
  //     console.log(`${key} moved within query to ${location} ${distance} km from center`);
  //   });
  //   await query.on('key_exited', (key, location, distance) => {
  //     console.log(`${key} exited query to ${location} ${distance} km from center`);
  //   });
  // }
  // onChildChange = (key, location) => {
  //   this.setState(p => ({
  //     drivers: p.drivers.map(
  //       driver =>
  //         driver.id === key ? { id: key, latitude: location[0], longitude: location[1] } : driver,
  //     ),
  //   }));
  // };
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
  const destination = getRegionFromPoint(latitude, longitude, 300)
  dispatch({ type: ActionType.SET_DESTINATION, destination })
}
