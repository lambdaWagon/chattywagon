import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Path, Svg } from 'react-native-svg'
import PropTypes from 'prop-types'

const hitSlop = { top: 20, bottom: 20, left: 20, right: 20 }

const Button = ({ navigate, style }) => (
  <TouchableOpacity hitSlop={hitSlop} style={style} onPress={navigate}>
    <Svg width={24} height={24} viewBox="0 0 408 408">
      <Path
        d="M408 178.5H96.9L239.7 35.7 204 0 0 204l204 204 35.7-35.7L96.9 229.5H408v-51z"
        fill="#000"
      />
    </Svg>
  </TouchableOpacity>
)

Button.defaultProps = { style: null }

Button.propTypes = {
  navigate: PropTypes.func.isRequired,
  style: PropTypes.number
}

export default Button
