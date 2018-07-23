import * as firebase from 'firebase';
import {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
} from 'react-native-dotenv';

/**
 * TODO
 * create phone auth
 *
 */

const config = {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
};

firebase.initializeApp(config); // makes firebase available to us

export const database = firebase.database(); // can import databse anywhere

export const auth = firebase.auth(); // general auth

export const facebook = new firebase.auth.FacebookAuthProvider();

export const storage = firebase.storage(); // stores img/video ....etc
