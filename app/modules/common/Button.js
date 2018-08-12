import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { Path, Svg } from 'react-native-svg'
import PropTypes from 'prop-types'

const styles = {
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    borderRadius: 2,
    height: 73,
    width: 294,
    padding: 25,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 10, height: 10 }
  },
  buttonText: {
    fontFamily: 'black',
    fontSize: 10,
    color: 'white',
    letterSpacing: 1.5
  }
}

const Button = ({ children, navigate, style }) => (
  <TouchableOpacity style={[style, styles.button]} onPress={navigate}>
    <Text style={styles.buttonText}>{children}</Text>
    <SvgComponent />
  </TouchableOpacity>
)

Button.defaultProps = { children: null, style: null }

Button.propTypes = {
  children: PropTypes.string,
  navigate: PropTypes.func.isRequired,
  style: PropTypes.object
}

const SvgComponent = props => (
  <Svg viewBox="0 0 31.49 31.49" width={20} height={20} {...props}>
    <Path
      d="M21.205 5.007a1.112 1.112 0 0 0-1.587 0 1.12 1.12 0 0 0 0 1.571l8.047 8.047H1.111A1.106 1.106 0 0 0 0 15.737c0 .619.492 1.127 1.111 1.127h26.554l-8.047 8.032c-.429.444-.429 1.159 0 1.587a1.112 1.112 0 0 0 1.587 0l9.952-9.952a1.093 1.093 0 0 0 0-1.571l-9.952-9.953z"
      fill="#FFF"
    />
  </Svg>
)

// const SvgComponent = props => (
//   <Svg viewBox="0 0 477.175 477.175" width={20} height={20} {...props}>
//     <Path
//       d="M360.731 229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1 0s-5.3 13.8 0 19.1l215.5 215.5-215.5 215.5c-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 4 9.5 4 3.4 0 6.9-1.3 9.5-4l225.1-225.1c5.3-5.2 5.3-13.8.1-19z"
//       fill="#FFF"
//     />
//   </Svg>
// )

export default Button
