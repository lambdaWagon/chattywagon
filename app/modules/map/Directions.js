import React from 'react'
import MapViewDirections from 'react-native-maps-directions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import * as actions from '../../actions'
import { config } from '../../config/firebase'

const Directions = ({
  destination,
  currentLocation,
  destinationSet,
  fitToCoords,
  pickupLocation,
  pickupLocationSet,
  setDirections
}) =>
  destinationSet && (
    <MapViewDirections
      apikey={config.apiKey}
      destination={`place_id:${destination.place_id}`}
      origin={
        pickupLocationSet
          ? `place_id:${pickupLocation.place_id}`
          : `place_id:${currentLocation.place_id}`
      }
      onReady={data => {
        fitToCoords(data.coordinates)
        setDirections(data)
      }}
      strokeWidth={3}
      strokeColor="black"
    />
  )

Directions.defaultProps = {
  pickupLocation: null
}

Directions.propTypes = {
  currentLocation: PropTypes.object.isRequired,
  destination: PropTypes.object.isRequired,
  destinationSet: PropTypes.bool.isRequired,
  pickupLocation: PropTypes.object,
  pickupLocationSet: PropTypes.bool.isRequired,
  setDirections: PropTypes.func.isRequired
}

const mapStateToProps = ({
  geolocation: { currentLocation, destination, destinationSet, pickupLocation, pickupLocationSet }
}) => ({
  currentLocation,
  destination,
  destinationSet,
  pickupLocation,
  pickupLocationSet
})

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Directions)
