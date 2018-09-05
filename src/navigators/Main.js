import React, { Fragment } from 'react'
import { createDrawerNavigator } from 'react-navigation'
import PropTypes from 'prop-types'

import { Map } from '../components/map'
import { Dashboard, Profile, Rides } from '../components/dashboard'
import { MenuButton } from '../components/shared'
import { deviceCheck } from '../styles'

export const MainNavigator = createDrawerNavigator(
  {
    Map
    // Help,
    // Payment,
    // Promos,
    // Contact,
    // Settings
  },
  {
    contentComponent: Dashboard,
    contentOptions: {
      labelStyle: {
        fontSize: deviceCheck(10, null)
      },
      activeTintColor: '#585858',
      inactiveTintColor: 'black'
    },
    drawerLockMode: 'locked-closed'
  }
)

const Main = ({ navigation }) => {
  if (navigation.state.routes[0].key === 'Map') {
    return (
      <Fragment>
        <MenuButton navigate={navigation} />
        <MainNavigator navigation={navigation} />
      </Fragment>
    )
  }
  return <MainNavigator navigation={navigation} />
}

Main.router = MainNavigator.router

Main.propTypes = { navigation: PropTypes.object.isRequired }

export default Main
