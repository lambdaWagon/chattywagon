import * as firebase from 'firebase'
import GeoFire from 'geofire'
import {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  fbAppId,
  googleMapsApiKey
} from 'react-native-dotenv'

export const config = {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  fbAppId,
  googleMapsApiKey
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const database = firebase.database()
export const geoFire = new GeoFire(database.ref('driverLocations'))
export const provider = new firebase.auth.FacebookAuthProvider()
export const storage = firebase.storage()
