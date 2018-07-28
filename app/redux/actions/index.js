import { database, config, geoFire } from '../../config/firebase';
import { getRegionFromArray, getRegionFromPoint } from '../../modules/map/utils';

export const GET_LOCATION = 'GET_LOCATION';
export const GET_DRIVERS = 'GET_DRIVERS';
export const ERROR = 'ERROR';
export const SET_PICKUP = 'SET_PICKUP';
export const SET_DESTINATION = 'SET_DESTINATION';

export const getLocation = () => dispatch => {
  navigator.geolocation.getCurrentPosition(
    pos => dispatch({ type: GET_LOCATION, pos }),
    error => console.log(error),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
  );
};

export const getDrivers = () => async dispatch => {
  try {
    const snapshot = await database.ref('driverLocations').once('value');
    if (snapshot) {
      const drivers = Object.entries(snapshot.val()).map(([k, v]) => ({
        id: k,
        latitude: v.l[0],
        longitude: v.l[1],
      }));
      const region = getRegionFromArray(drivers);
      dispatch({ type: GET_DRIVERS, drivers, region });
    }
  } catch (e) {
    console.log(e);
    dispatch({ type: ERROR, e });
  }
};

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
};

export const setPickupLocation = ({
  nativeEvent: {
    coordinate: { latitude, longitude },
  },
}) => dispatch => {
  const pickupLocation = getRegionFromPoint(latitude, longitude, 300);
  dispatch({ type: SET_PICKUP, pickupLocation });
};

export const setDestination = ({
  nativeEvent: {
    coordinate: { latitude, longitude },
  },
}) => dispatch => {
  const destination = getRegionFromPoint(latitude, longitude, 300);
  dispatch({ type: SET_DESTINATION, destination });
};

export const action = () => {};
