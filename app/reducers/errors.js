import { ERROR } from '../constants'

export default (state = {}, action) => {
  switch (action.type) {
    case ERROR:
      return { ...state, error: action.e }
    default:
      return state
  }
}
