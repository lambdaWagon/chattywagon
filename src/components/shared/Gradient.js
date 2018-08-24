import React from 'react'
import { KeyboardAvoidingView, View, Platform } from 'react-native'
import { LinearGradient } from 'expo'
import PropTypes from 'prop-types'

import styles from '../../styles'

//

const Gradient = ({ children, keyboard }) => (
  <LinearGradient colors={['#c4f4ff', '#c4f4ff', '#e8863c']} style={styles.gradient}>
    {keyboard ? (
      <KeyboardAvoidingView
        behavior="padding"
        enabled
        style={styles.containerCentered}
        keyboardVerticalOffset={Platform.OS === 'ios' ? -150 : 0}
      >
        {children}
      </KeyboardAvoidingView>
    ) : (
      <View style={styles.containerCentered}>{children}</View>
    )}
  </LinearGradient>
)

Gradient.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  keyboard: PropTypes.bool
}

Gradient.defaultProps = {
  children: null,
  keyboard: false
}

export default Gradient
