import { eventChannel } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'
import * as types from '../constants'
import { auth } from '../config/firebase'

const authStateChange = () =>
  eventChannel(emit => {
    auth.onAuthStateChanged(user => {
      emit({ user })
    })
    return () => {}
  })

export function* verifyAuth() {
  const channel = yield call(authStateChange)

  while (true) {
    const { user } = yield take(channel)
    if (user) {
      yield put({ type: types.AUTH_USER, user })
    } else {
      yield put({ type: types.SIGN_OUT })
    }
  }
}

export const signUserOut = () => async dispatch => {
  await auth.signOut()
  dispatch({ type: types.SIGN_OUT })
}
