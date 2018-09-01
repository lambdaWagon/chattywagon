import * as types from '../constants'

const initialState = {
  searchModal: false,
  confirmModal: false,
  pickupInput: false,
  destinationInput: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_SEARCH:
      return { ...state, searchModal: true }
    case types.HIDE_SEARCH:
      return { ...initialState }
    case types.SHOW_CONFIRM:
      return { ...state, confirmModal: !state.confirmModal }
    case types.BLUR_PICKUP:
      return { ...state, pickupInput: false }
    case types.FOCUS_PICKUP:
      return { ...state, pickupInput: true }
    case types.BLUR_DEST:
      return { ...state, destinationInput: false }
    case types.FOCUS_DEST:
      return { ...state, destinationInput: true }
    case types.SET_DESTINATION:
      return {
        ...initialState,
        confirmModal: true
      }
    default:
      return state
  }
}
