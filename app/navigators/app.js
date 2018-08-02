import { createStackNavigator } from 'react-navigation'
// import { createFluidNavigator } from 'react-navigation-fluid-transitions'

import { Map, SearchTwo } from '../modules/map'
import { Search } from '../components'

export default createStackNavigator(
  {
    SearchTwo,
    Map,
    Search: {
      screen: Search
    }
  },
  {
    navigationOptions: { gesturesEnabled: true },
    mode: 'card'
  }
)
