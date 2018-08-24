import React from 'react'
import { Image, Text, View } from 'react-native'
import { Marker } from 'react-native-maps'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import styles from '../../styles'

const MarkerDestination = ({ coordinates, destination, destinationSet, duration }) =>
  coordinates && destinationSet ? (
    <Marker anchor={{ x: 0.5, y: 1 }} coordinate={coordinates[coordinates.length - 1]} zIndex={5}>
      <View style={[styles.markerContainer]}>
        <View style={styles.bubble}>
          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>{Math.round(duration)}</Text>
            <Text style={styles.minText}>min</Text>
          </View>
          <View style={styles.markerText}>
            <Text numberOfLines={1} ellipsizeMode="clip">
              {destination.structured_formatting.main_text}
            </Text>
          </View>
        </View>
        <Image style={styles.markerImage} source={require('../../../assets/marker4.png')} />
      </View>
    </Marker>
  ) : null

MarkerDestination.defaultProps = {
  coordinates: null,
  duration: null
}

MarkerDestination.propTypes = {
  coordinates: PropTypes.array,
  destination: PropTypes.object.isRequired,
  destinationSet: PropTypes.bool.isRequired,
  duration: PropTypes.number
}

export default connect(
  ({
    geolocation: {
      destination,
      destinationSet,
      directions: { coordinates, duration }
    }
  }) => ({ coordinates, destination, destinationSet, duration })
)(MarkerDestination)
