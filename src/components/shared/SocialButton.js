import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import PropTypes from 'prop-types'

import { Email, Facebook, Google, Twitter } from './icons'

import { checker } from '../../styles'

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: wp('2%')
  },
  text: {
    marginLeft: 15,
    fontFamily: 'bold',
    fontSize: checker(12, 15),
    letterSpacing: 1
  }
})

const selector = type => {
  switch (type) {
    case 'Google':
      return <Google />
    case 'Twitter':
      return <Twitter />
    case 'Facebook':
      return <Facebook />
    case 'Email':
      return <Email />
    default:
      return null
  }
}

const SocialButton = ({ navigate, type }) => (
  <TouchableOpacity activeOpactiy={0.75} onPress={navigate} style={styles.button}>
    {selector(type)}
    <Text style={styles.text}>{type}</Text>
  </TouchableOpacity>
)

SocialButton.propTypes = {
  navigate: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
}

export default SocialButton
