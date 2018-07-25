import Expo from 'expo';
import * as firebase from 'firebase';
import { auth, config, database } from '../../config/firebase';

// Create the user object in realtime database
export function createUser(user, callback) {
  const { displayName, email, phoneNumber, providerData } = user;
  const newUser = {
    displayName,
    email,
    phoneNumber,
    providerData,
  };

  database
    .ref('users')
    .child(user.uid)
    .set(newUser)
    .then(() => callback(true, user, null))
    .catch(error => callback(false, null, { message: error }));
}

// Register the user using email and password
export function register(data, callback) {
  const { email, password, username } = data;
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(resp => createUser({ username, uid: resp.user.uid }, callback))
    .catch(error => callback(false, null, error));
}

// Get the user object from the realtime database
export function getUser(user, callback) {
  database
    .ref('users')
    .child(user.uid)
    .once('value')
    .then(snapshot => {
      const exists = snapshot.val() !== null;
      if (exists) {
        user = snapshot.val();
      } else {
        createUser(user, callback);
      }
      callback(true, { exists, user }, null);
    })
    .catch(error => callback(false, null, error));
}

// Sign the user in with their email and password
export function login(data, callback) {
  const { email, password } = data;
  auth
    .signInWithEmailAndPassword(email, password)
    .then(resp => getUser(resp.user, callback))
    .catch(error => callback(false, null, error));
}

export async function signInWithFacebook() {
  const options = {
    permissions: ['public_profile', 'email'],
    behavior: 'web',
  };
  try {
    const { token, type } = await Expo.Facebook.logInWithReadPermissionsAsync(
      config.fbAppId,
      options,
    );
    if (type === 'success') {
      // const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
      const credential = await firebase.auth.FacebookAuthProvider.credential(token);
      await auth.signInAndRetrieveDataWithCredential(credential);
      getUser(auth.currentUser, (loggedIn, user, error) => {
        console.log(loggedIn, user, error);
      });
    }
  } catch (e) {
    console.log(e);
  }
}

// Send Password Reset Email
export function resetPassword(data, callback) {
  const { email } = data;
  auth
    .sendPasswordResetEmail(email)
    .then(() => callback(true, null, null))
    .catch(error => callback(false, null, error));
}

export function signOut(callback) {
  auth
    .signOut()
    .then(() => {
      if (callback) callback(true, null, null);
    })
    .catch(error => {
      if (callback) callback(false, null, error);
    });
}
