import React from 'react'
import { Image } from 'react-native'
import { Marker } from 'react-native-maps'
import PropTypes from 'prop-types'

const styles = {
  width: 30,
  height: 15,
  transform: [{ rotate: `${Math.random() * 1}deg` }]
}

const MarkerDriver = ({ d }) => (
  <Marker coordinate={d} flat={false} zIndex={1}>
    <Image style={styles} source={require('../../../assets/van.png')} />
  </Marker>
)

MarkerDriver.propTypes = {
  d: PropTypes.object.isRequired
}

export default MarkerDriver
