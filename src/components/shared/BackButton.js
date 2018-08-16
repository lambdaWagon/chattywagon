import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Path, Svg } from 'react-native-svg'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    borderRadius: 25,
    height: 30,
    width: 30,
    padding: 20,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 }
  }
})

const Button = ({ navigate, style }) => (
  <TouchableOpacity style={[style, styles.button]} onPress={navigate}>
    <SvgComponent />
  </TouchableOpacity>
)

Button.defaultProps = { style: null }

Button.propTypes = {
  navigate: PropTypes.func.isRequired,
  style: PropTypes.number
}

// const SvgComponent = props => (
//   <Svg viewBox="0 0 31.49 31.49" width={20} height={20} {...props}>
//     <Path
//       d="M21.205 5.007a1.112 1.112 0 0 0-1.587 0 1.12 1.12 0 0 0 0 1.571l8.047 8.047H1.111A1.106 1.106 0 0 0 0 15.737c0 .619.492 1.127 1.111 1.127h26.554l-8.047 8.032c-.429.444-.429 1.159 0 1.587a1.112 1.112 0 0 0 1.587 0l9.952-9.952a1.093 1.093 0 0 0 0-1.571l-9.952-9.953z"
//       fill="#FFF"
//     />
//   </Svg>
// )

const SvgComponent = props => (
  <Svg viewBox="0 0 31.494 31.494" width={20} height={20} {...props}>
    <Path
      d="M10.273 5.009a1.112 1.112 0 0 1 1.587 0 1.12 1.12 0 0 1 0 1.571l-8.047 8.047h26.554c.619 0 1.127.492 1.127 1.111s-.508 1.127-1.127 1.127H3.813l8.047 8.032c.429.444.429 1.159 0 1.587a1.112 1.112 0 0 1-1.587 0L.321 16.532a1.12 1.12 0 0 1 0-1.571l9.952-9.952z"
      fill="#fff"
    />
  </Svg>
)

export default Button
