import { NavigationActions, DrawerActions } from 'react-navigation'

import { RootNavigator } from '../navigators'
import * as types from '../constants'

const initialState = RootNavigator.router.getStateForAction(
  RootNavigator.router.getActionForPathAndParams('Auth')
)

export default (state = initialState, action) => {
  let nextState

  switch (action.type) {
    case types.TOGGLE_DRAWER:
      nextState = RootNavigator.router.getStateForAction(DrawerActions.toggleDrawer(), state)
      break
    case types.AUTH_USER:
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Main' }),
        state
      )
      break
    case types.SIGN_OUT:
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Auth' }),
        state
      )
      break
    case types.RESET_DIRECTIONS:
      nextState = RootNavigator.router.getStateForAction(NavigationActions.back(), state)
      break
    default:
      nextState = RootNavigator.router.getStateForAction(action, state)
      break
  }

  return nextState || state
}
