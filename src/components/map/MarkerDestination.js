import React, { PureComponent } from 'react'
import { LayoutAnimation, Image, Text, View } from 'react-native'
import { Marker } from 'react-native-maps'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import styles from '../../styles'

const marker = require('../../../assets/marker4.png')

class MarkerDestination extends PureComponent {
  static propTypes = {
    coordinates: PropTypes.array,
    destination: PropTypes.object.isRequired,
    destinationSet: PropTypes.bool.isRequired
  }

  static defaultProps = { coordinates: null }

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
    const { coordinates, destination, destinationSet } = this.props
    const { width } = this.state
    return coordinates && destinationSet ? (
      <Marker
        anchor={{ x: 0.5, y: 1 }}
        coordinate={coordinates[coordinates.length - 1]}
        onLayout={this.onLayout}
        zIndex={5}
      >
        <View style={styles.markerContainer}>
          <View style={styles.bubble}>
            <Text ellipsizeMode="tail" numberOfLines={2} style={[styles.markerText, { width }]}>
              {destination.structured_formatting.main_text}
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
      destination,
      destinationSet,
      directions: { coordinates }
    }
  }) => ({ coordinates, destination, destinationSet })
)(MarkerDestination)
