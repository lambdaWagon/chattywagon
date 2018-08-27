import { createSwitchNavigator } from 'react-navigation'
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'

import Auth from './Auth'
import Main from './Main'

const navMiddleware = createReactNavigationReduxMiddleware('root', state => state.navigation)

const RootNavigator = createSwitchNavigator({ Auth, Main })

const AppWithNavState = connect(({ navigation }) => ({ state: navigation }))(
  reduxifyNavigator(RootNavigator, 'root')
)

export { RootNavigator, AppWithNavState, navMiddleware }
