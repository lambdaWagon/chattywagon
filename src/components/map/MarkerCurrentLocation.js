import React from 'react'
import { Image } from 'react-native'
import { Marker } from 'react-native-maps'
import { connect } from 'react-redux'

const markerImage = require('../../../assets/marker.png')

const MarkerCurrentLocation = ({ currentLocation, currentLocationSet, destinationSet }) =>
  currentLocationSet &&
  !destinationSet && (
    <Marker
      anchor={{ x: 0.5, y: 1 }}
      coordinate={currentLocation}
      title={currentLocation.address}
      zIndex={2}
    >
      <Image style={{ width: 31, height: 35 }} source={markerImage} />
    </Marker>
  )

export default connect(
  ({ geolocation: { currentLocation, currentLocationSet, destinationSet } }) => ({
    currentLocation,
    currentLocationSet,
    destinationSet
  })
)(MarkerCurrentLocation)
