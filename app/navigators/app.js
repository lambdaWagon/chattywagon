// import { createStackNavigator } from 'react-navigation'
import { createFluidNavigator } from 'react-navigation-fluid-transitions'

import { Map } from '../modules/map'
import { Search, SearchBar } from '../components'

export default createFluidNavigator(
  {
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
