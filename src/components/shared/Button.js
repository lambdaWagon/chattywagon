import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Path, Svg } from 'react-native-svg'
import PropTypes from 'prop-types'

import { deviceCheck } from '../../styles'

const styles = StyleSheet.create({
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
    fontSize: deviceCheck(6, 10),
    color: 'white',
    letterSpacing: 1.5
  }
})

const Button = ({ children, disabled, icon, navigate, style, textStyle }) => (
  <TouchableOpacity
    activeOpacity={0.75}
    disabled={disabled}
    style={[styles.button, style]}
    onPress={navigate}
  >
    <Text style={[styles.buttonText, textStyle]}>{children}</Text>
    {icon ? <SvgComponent /> : null}
  </TouchableOpacity>
)

Button.defaultProps = {
  children: null,
  disabled: false,
  icon: true,
  navigate: null,
  style: null,
  textStyle: null
}

Button.propTypes = {
  children: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.bool,
  navigate: PropTypes.func,
  style: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  textStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object])
}

const SvgComponent = props => (
  <Svg viewBox="0 0 31.49 31.49" width={20} height={20} {...props}>
    <Path
      d="M21.205 5.007a1.112 1.112 0 0 0-1.587 0 1.12 1.12 0 0 0 0 1.571l8.047 8.047H1.111A1.106 1.106 0 0 0 0 15.737c0 .619.492 1.127 1.111 1.127h26.554l-8.047 8.032c-.429.444-.429 1.159 0 1.587a1.112 1.112 0 0 0 1.587 0l9.952-9.952a1.093 1.093 0 0 0 0-1.571l-9.952-9.953z"
      fill="#FFF"
    />
  </Svg>
)

export default Button
