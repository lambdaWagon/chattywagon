import { eventChannel } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'
import { AsyncStorage } from 'react-native'
import Expo from 'expo'
import * as firebase from 'firebase'

import { auth, config } from '../config/firebase'
import * as types from '../constants'

const authStateChange = () =>
  eventChannel(emit => {
    auth.onAuthStateChanged(user => {
      emit({ user })
    })
    return () => {}
  })

export function* watchUserAuth() {
  const channel = yield call(authStateChange)

  while (true) {
    const { user } = yield take(channel)
    if (user) {
      yield AsyncStorage.setItem('user_data', JSON.stringify(user))
      yield put({ type: types.AUTH_USER, user })
    } else {
      yield put({ type: types.SIGN_OUT })
    }
  }
}

export const signInWithFacebook = () => async dispatch => {
  const options = {
    permissions: ['public_profile', 'email'],
    behavior: 'web'
  }
  try {
    const { token, type } = await Expo.Facebook.logInWithReadPermissionsAsync(
      config.fbAppId,
      options
    )
    if (type === 'success') {
      const credential = await firebase.auth.FacebookAuthProvider.credential(token)
      await auth.signInAndRetrieveDataWithCredential(credential)
    }
  } catch (error) {
    dispatch({ type: types.ERROR, error })
  }
}

export const signUserOut = () => async dispatch => {
  try {
    await auth.signOut()
    await AsyncStorage.removeItem('user_data')
    dispatch({ type: types.SIGN_OUT })
  } catch (error) {
    dispatch({ type: types.ERROR, error })
  }
}
