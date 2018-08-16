import React, { Fragment } from 'react'
import { StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { createDrawerNavigator } from 'react-navigation'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import PropTypes from 'prop-types'

import { Dashboard, Help, Payment, Promos, Profile, Rides, Settings } from '../components/dashboard'
import { Map, MapUIConfirm, Search } from '../components/map'
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
    Search,
    MapUIConfirm
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

const Main = props => {
  console.log(props)
  const { destinationSet, navigation } = props
  const goBack = () => navigation.navigate('Map')
  const toggle = () => navigation.toggleDrawer()
  const type = destinationSet ? 'arrow' : 'cross'
  const color = destinationSet ? '#e8863c' : 'black'
  const navigate = destinationSet ? toggle : toggle

  return (
    <Fragment>
      <MenuButton color={color} type={type} style={styles.button} navigate={navigate} />
      <MainNavigator navigation={navigation} />
    </Fragment>
  )
}

Main.router = MainNavigator.router
Main.propTypes = {
  destinationSet: PropTypes.bool.isRequired,
  navigation: PropTypes.object.isRequired
}

export default connect(({ geolocation: { destinationSet } }) => ({ destinationSet }))(Main)
