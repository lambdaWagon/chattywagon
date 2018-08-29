import React, { Fragment } from 'react'
import { createDrawerNavigator } from 'react-navigation'
import PropTypes from 'prop-types'

import { Dashboard, Help, Payment, Promos, Profile, Rides, Settings } from '../components/dashboard'
import { MenuButton } from '../components/shared'
import MapNavigator from './Map'

export const MainNavigator = createDrawerNavigator(
  {
    Map: MapNavigator,
    Help,
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
  if (navigation.state.routes[0].index === 0) {
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
