import React from 'react'
import { Image, View } from 'react-native'
import { Marker } from 'react-native-maps'
import { connect } from 'react-redux'
import LottieView from 'lottie-react-native'

import styles from '../../styles'

const markerImage = require('../../../assets/marker.png')
const pulse = require('../../../assets/pulse.json')

const MarkerCurrentLocation = ({ currentLocation, currentLocationSet, destinationSet }) =>
  currentLocationSet &&
  !destinationSet && (
    <Marker
      anchor={{ x: 0.5, y: 1 }}
      coordinate={currentLocation}
      title={currentLocation.address}
      zIndex={2}
    >
      <View style={styles.currentLocation}>
        <LottieView style={styles.currentLocAnim} source={pulse} autoPlay loop />
        <Image style={styles.currentLocMarker} source={markerImage} />
      </View>
    </Marker>
  )

export default connect(
  ({ geolocation: { currentLocation, currentLocationSet, destinationSet } }) => ({
    currentLocation,
    currentLocationSet,
    destinationSet
  })
)(MarkerCurrentLocation)
