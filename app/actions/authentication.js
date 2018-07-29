import * as ActionType from '../constants'
import { auth } from '../config/firebase'

export const verifyAuth = () => dispatch => {
  auth.onAuthStateChanged(user => {
    if (user) {
      console.log(user)
      dispatch({ type: ActionType.AUTH_USER, user })
    } else {
      dispatch({ type: ActionType.SIGN_OUT })
    }
  })
}

export const signUserOut = () => async dispatch => {
  await auth.signOut()
  dispatch({ type: ActionType.SIGN_OUT })
}
