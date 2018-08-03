import React, { Fragment } from 'react'
import { Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import * as actions from '../../actions'
import { config } from '../../config/firebase'

const Directions = ({ coords, destination, currentLocation, destinationSet, fitToCoords }) => (
  <Fragment>
    {destinationSet && (
      <MapViewDirections
        origin={currentLocation}
        destination={destination}
        apikey={config.googleMapsApiKey}
        strokeWidth={3}
        strokeColor="black"
        onStart={params =>
          console.log(`Started routing between "${params.origin}" and "${params.destination}"`)
        }
        onReady={fitToCoords}
      />
    )}
    {coords && (
      <Marker
        pinColor="yellow"
        title="Destination"
        draggable
        coordinate={coords[coords.length - 1]}
      />
    )}
  </Fragment>
)

Directions.defaultProps = { coords: null }

Directions.propTypes = {
  coords: PropTypes.arrayOf(PropTypes.number),
  currentLocation: PropTypes.object.isRequired,
  destination: PropTypes.string.isRequired,
  destinationSet: PropTypes.bool.isRequired,
  fitToCoords: PropTypes.func.isRequired
}

const mapStateToProps = ({ geolocation: { currentLocation, destination, destinationSet } }) => ({
  currentLocation,
  destination: `place_id:${destination.place_id}`,
  destinationSet
})

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Directions)
