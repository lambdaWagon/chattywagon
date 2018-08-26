import React, { Component } from 'react'
import { Image, LayoutAnimation, Text, View } from 'react-native'
import { Marker } from 'react-native-maps'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import styles from '../../styles'

const marker = require('../../../assets/marker4.png')

class MarkerOrigin extends Component {
  static propTypes = {
    address: PropTypes.string,
    coordinates: PropTypes.array,
    duration: PropTypes.number,
    pickupLocation: PropTypes.object.isRequired,
    pickupLocationSet: PropTypes.bool.isRequired
  }

  static defaultProps = {
    address: null,
    coordinates: null,
    duration: null
  }

  state = { width: null }

  onLayout = ({
    nativeEvent: {
      layout: { width }
    }
  }) => {
    if (width > 170) {
      LayoutAnimation.spring()
      this.setState({ width: 125 })
    }
  }

  render() {
    const { address, coordinates, duration, pickupLocation, pickupLocationSet } = this.props
    const { width } = this.state

    return coordinates ? (
      <Marker
        anchor={{ x: 0.5, y: 1 }}
        coordinate={coordinates[0]}
        onLayout={this.onLayout}
        zIndex={5}
      >
        <View style={styles.markerContainer}>
          <View style={styles.bubble}>
            <View style={styles.timeContainer}>
              <Text style={styles.timeText}>{Math.round(duration)}</Text>
              <Text style={styles.minText}>min</Text>
            </View>
            <Text style={[styles.markerText, { width }]} numberOfLines={2} ellipsizeMode="tail">
              {pickupLocationSet
                ? pickupLocation.structured_formatting.main_text
                : address.substr(0, address.indexOf(','))}
            </Text>
          </View>
          <Image style={styles.markerImage} source={marker} />
        </View>
      </Marker>
    ) : null
  }
}

export default connect(
  ({
    geolocation: {
      currentLocation: { address },
      directions: { coordinates, duration },
      pickupLocation,
      pickupLocationSet
    }
  }) => ({
    address,
    coordinates,
    duration,
    pickupLocation,
    pickupLocationSet
  })
)(MarkerOrigin)
