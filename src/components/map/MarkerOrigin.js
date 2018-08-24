import React from 'react'
import { Image, Text, View } from 'react-native'
import { Marker } from 'react-native-maps'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import styles from '../../styles'

const MarkerOrigin = ({ address, coordinates, pickupLocation, pickupLocationSet }) =>
  coordinates ? (
    <Marker anchor={{ x: 0.5, y: 1 }} coordinate={coordinates[0]} zIndex={5}>
      <View style={styles.markerContainer}>
        <View style={styles.bubble}>
          {pickupLocationSet ? (
            <Text style={styles.markerText}>{pickupLocation.structured_formatting.main_text}</Text>
          ) : (
            <Text style={styles.markerText}>{address.substr(0, address.indexOf(','))}</Text>
          )}
        </View>
        <Image style={styles.markerImage} source={require('../../../assets/marker4.png')} />
      </View>
    </Marker>
  ) : null

MarkerOrigin.defaultProps = {
  address: null,
  coordinates: null
}

MarkerOrigin.propTypes = {
  address: PropTypes.string,
  coordinates: PropTypes.array,
  pickupLocation: PropTypes.object.isRequired,
  pickupLocationSet: PropTypes.bool.isRequired
}

export default connect(
  ({
    geolocation: {
      currentLocation: { address },
      directions: { coordinates },
      pickupLocation,
      pickupLocationSet
    }
  }) => ({
    address,
    coordinates,
    pickupLocation,
    pickupLocationSet
  })
)(MarkerOrigin)
