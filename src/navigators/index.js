import { createSwitchNavigator } from 'react-navigation'

import Loading from './Loading'
import Auth from './Auth'
import Main from './Main'

export default createSwitchNavigator({
  Loading,
  Auth,
  Main
})
