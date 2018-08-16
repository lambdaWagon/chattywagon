import * as types from '../constants'

const initialState = {
  authenticated: false,
  user: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_USER:
      return { ...state, authenticated: true, user: action.user }
    case types.SIGN_OUT:
      return { authenticated: false, user: null }
    default:
      return state
  }
}
