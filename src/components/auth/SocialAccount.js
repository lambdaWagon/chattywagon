import React from 'react'
import { View, StyleSheet } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import * as actions from '../../actions'
import { Button, Gradient, SocialButton } from '../shared'

const styles = StyleSheet.create({
  socialIconsContainer: {
    width: 294,
    padding: 25,
    backgroundColor: 'white'
  },
  button: {
    justifyContent: 'center',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0
  }
})

const SocialAccount = ({ navigation: { navigate }, signInWithFacebook, signUserOut }) => (
  <Gradient>
    <View style={styles.socialIconsContainer}>
      <SocialButton type="Google" navigate={() => navigate('SocialLogin')} />
      <SocialButton type="Twitter" navigate={signUserOut} />
      <SocialButton type="Facebook" navigate={signInWithFacebook} />
      <SocialButton type="Email" navigate={() => navigate('SocialLogin')} />
    </View>
    <Button disabled icon={false} style={styles.button}>
      CHOOSE AN ACCOUNT
    </Button>
  </Gradient>
)

SocialAccount.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired,
  signInWithFacebook: PropTypes.func.isRequired,
  signUserOut: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(SocialAccount)
