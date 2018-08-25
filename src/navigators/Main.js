import React, { Fragment } from 'react'
import { StyleSheet } from 'react-native'
import { createDrawerNavigator } from 'react-navigation'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import PropTypes from 'prop-types'

import { Dashboard, Help, Payment, Promos, Profile, Rides, Settings } from '../components/dashboard'
import { MenuButton } from '../components/shared'
import MapNavigator from './Map'

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
    MapNavigator,
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
    }
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
        drawerState={navigation.state.isDrawerOpen}
        navigate={() => navigation.toggleDrawer()}
        style={styles.button}
      />
      <MainNavigator navigation={navigation} />
    </Fragment>
  )
}

Main.router = MainNavigator.router

Main.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default Main
