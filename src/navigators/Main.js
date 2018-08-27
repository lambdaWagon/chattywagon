import React, { Fragment } from 'react'
import { createDrawerNavigator } from 'react-navigation'
import PropTypes from 'prop-types'

import { Dashboard, Help, Payment, Promos, Profile, Rides, Settings } from '../components/dashboard'
import { MenuButton } from '../components/shared'
import MapNavigator from './Map'

export const MainNavigator = createDrawerNavigator(
  {
    Help,
    MapNavigator,
    Payment,
    Promos,
    Profile,
    Rides,
    Settings
  },
  {
    contentComponent: Dashboard,
    contentOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'white'
    },
    drawerLockMode: 'locked-closed'
  }
)

const Main = ({ navigation }) => {
  // console.log('📍 main nav', navigation.state)
  // if (navigation.state.routes[0].index === 0) {
  //   return (
  //     <Fragment>
  //       <MenuButton
  //         drawerState={navigation.state.isDrawerOpen}
  //         navigate={() => navigation.toggleDrawer()}
  //         style={styles.button}
  //       />
  //       <MainNavigator navigation={navigation} />
  //     </Fragment>
  //   )
  // }
  // return <MainNavigator navigation={navigation} />
  return (
    <Fragment>
      <MenuButton
        // drawerState={navigation.state.isDrawerOpen}
        // navigate={() => navigation.toggleDrawer()}
        navigation={navigation}
      />
      <MainNavigator navigation={navigation} />
    </Fragment>
  )
}

Main.router = MainNavigator.router

// const defaultGetStateForAction = Main.router.getStateForAction

// Main.router.getStateForAction = (action, state) => {
//   console.log(state, action)
//   if (state && action.type === 'Navigation/NAVIGATE' && action.routeName === 'DrawerClose') {
//     console.log(state, action)
//   }
//   if (state && action.type === 'Navigation/NAVIGATE' && action.routeName === 'DrawerOpen') {
//     console.log(state, action)
//   }
//   return defaultGetStateForAction(action, state)
// }

Main.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default Main
