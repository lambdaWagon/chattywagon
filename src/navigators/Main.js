import React, { Fragment } from 'react'
import { StyleSheet } from 'react-native'
import { createDrawerNavigator } from 'react-navigation'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import PropTypes from 'prop-types'

import { Dashboard, Help, Payment, Promos, Profile, Rides, Settings } from '../components/dashboard'
import { Map, Search } from '../components/map'
import { MenuButton } from '../components/shared'

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    marginLeft: wp('6%'),
    marginTop: hp('6%'),
    zIndex: 999
  }
})

export const MainNavigator = createDrawerNavigator(
  {
    Map,
    Help,
    Payment,
    Promos,
    Profile,
    Rides,
    Settings,
    Search
  },
  {
    contentComponent: Dashboard,
    contentOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'white'
    },
    drawerType: 'push-screen'
  }
)

const Main = ({ navigation }) => (
  <Fragment>
    <MenuButton style={styles.button} navigate={() => navigation.toggleDrawer()} />
    <MainNavigator navigation={navigation} />
  </Fragment>
)

Main.router = MainNavigator.router
Main.propTypes = { navigation: PropTypes.object.isRequired }

export default Main
