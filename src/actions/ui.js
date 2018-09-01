import * as types from '../constants'

export const showSearch = () => ({ type: types.SHOW_SEARCH })

export const hideSearch = () => ({ type: types.HIDE_SEARCH })

export const showConfirm = () => ({ type: types.SHOW_CONFIRM })

export const blurPickup = () => ({ type: types.BLUR_PICKUP })

export const focusPickup = () => ({ type: types.FOCUS_PICKUP })

export const blurDest = () => ({ type: types.BLUR_DEST })

export const focusDest = () => ({ type: types.FOCUS_DEST })
