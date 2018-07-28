import { ERROR } from '../actions'

export default (state = {}, action) => {
  switch (action.type) {
    case ERROR:
      return { ...state, error: action.e }
    default:
      return state
  }
}
