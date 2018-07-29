import * as ActionType from '../constants'

const initialState = {
  authenicated: false,
  user: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionType.AUTH_USER:
      return { ...state, authenicated: true, user: action.user }
    case ActionType.SIGN_OUT:
      return { authenicated: false, user: null }
    default:
      return state
  }
}
