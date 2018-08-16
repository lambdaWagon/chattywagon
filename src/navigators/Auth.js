import React, { Fragment } from 'react'
import { StyleSheet } from 'react-native'
import { createSwitchNavigator } from 'react-navigation'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import PropTypes from 'prop-types'

import { CodeInput, PhoneInput, SplashScreen, SocialAccount, SocialLogin } from '../components/auth'
import { BackButton } from '../components/shared'

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    marginLeft: wp('7%'),
    marginTop: hp('7%'),
    zIndex: 999
  }
})

export const AuthNavigator = createSwitchNavigator({
  SplashScreen,
  PhoneInput,
  CodeInput,
  SocialAccount,
  SocialLogin
})

const Auth = ({ navigation }) => {
  const { index } = navigation.state
  const previous = navigation.state.routes[index - 1]
  const navigate = () => navigation.navigate(previous)

  return (
    <Fragment>
      {index > 0 && <BackButton style={styles.button} navigate={navigate} />}
      <AuthNavigator navigation={navigation} />
    </Fragment>
  )
}

Auth.router = AuthNavigator.router
Auth.propTypes = { navigation: PropTypes.object.isRequired }

export default Auth
