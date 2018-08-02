import * as types from '../constants'

const initialState = {
  authenicated: false,
  user: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_USER:
      return { ...state, authenicated: true, user: action.user }
    case types.SIGN_OUT:
      return { authenicated: false, user: null }
    default:
      return state
  }
}
