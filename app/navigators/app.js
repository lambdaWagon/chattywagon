import { createStackNavigator } from 'react-navigation'
// import { createFluidNavigator } from 'react-navigation-fluid-transitions'

import { Map, Search } from '../modules/map'

export default createStackNavigator(
  {
    Map,
    Search
  },
  {
    navigationOptions: {
      headerTransparent: true
    }
  }
)
