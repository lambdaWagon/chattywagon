import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Path, Svg } from 'react-native-svg'
import PropTypes from 'prop-types'

const Button = ({ navigate, style }) => (
  <TouchableOpacity style={style} onPress={navigate}>
    <Svg width={24} height={24}>
      <Path fill="#e8863c" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
    </Svg>
  </TouchableOpacity>
)

Button.defaultProps = { style: null }

Button.propTypes = {
  navigate: PropTypes.func.isRequired,
  style: PropTypes.number
}

export default Button
