import React from 'react'
import { View } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { Button, Gradient, SocialButton } from '../shared'
import styles from '../../styles'
import * as actions from '../../actions'

const SocialAccount = ({ navigation: { navigate }, signInWithFacebook, signUserOut }) => (
  <Gradient>
    <View style={styles.authContainer}>
      <SocialButton type="Google" navigate={() => navigate('SocialLogin')} />
      <SocialButton type="Twitter" navigate={signUserOut} />
      <SocialButton type="Facebook" navigate={signInWithFacebook} />
      <SocialButton type="Email" navigate={() => navigate('SocialLogin')} />
    </View>
    <Button disabled icon={false} style={styles.socialButton}>
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
