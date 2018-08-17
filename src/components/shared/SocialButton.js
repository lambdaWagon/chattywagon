import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Path, Svg } from 'react-native-svg'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: wp('2%')
  },
  icon: {
    marginRight: 15
  },
  text: {
    fontFamily: 'bold',
    fontSize: 15,
    letterSpacing: 1
  }
})

const Google = (
  <Path d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z" />
)
const Twitter = (
  <Path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
)
const Facebook = (
  <Path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z" />
)
const Email = (
  <Path d="M20 8l-8 5-8-5V6l8 5 8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
)

const selector = type => {
  switch (type) {
    case 'Google':
      return Google
    case 'Twitter':
      return Twitter
    case 'Facebook':
      return Facebook
    case 'Email':
      return Email
    default:
      return null
  }
}

const SocialButton = ({ navigate, type }) => (
  <TouchableOpacity activeOpactiy={0.75} onPress={navigate} style={styles.button}>
    <Svg width={24} height={24} style={styles.icon}>
      {selector(type)}
    </Svg>
    <Text style={styles.text}>{type}</Text>
  </TouchableOpacity>
)

SocialButton.propTypes = {
  navigate: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
}

export default SocialButton
