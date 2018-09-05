import React from 'react'
import { View } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { Button, Gradient, SocialButton } from '../shared'
import styles from '../../styles'
import * as actions from '../../actions'

const SocialAccount = ({ navigation: { navigate }, signInWithFacebook }) => {
  const grey = { color: 'grey' }
  const tmp = () => navigate('SocialLogin')
  return (
    <Gradient>
      <View style={styles.authContainer}>
        <SocialButton type="Google" style={grey} navigate={tmp} />
        <SocialButton type="Twitter" style={grey} navigate={tmp} />
        <SocialButton type="Facebook" navigate={signInWithFacebook} />
        <SocialButton type="Email" style={grey} navigate={tmp} />
      </View>
      <Button disabled icon={false} style={styles.socialButton}>
        CHOOSE AN ACCOUNT
      </Button>
    </Gradient>
  )
}

SocialAccount.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired,
  signInWithFacebook: PropTypes.func.isRequired
}

export default connect(
  null,
  dispatch => bindActionCreators(actions, dispatch)
)(SocialAccount)
