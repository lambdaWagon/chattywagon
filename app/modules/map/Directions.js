import React, { Fragment } from 'react'
import { Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../../actions'
import { config } from '../../config/firebase'

const Directions = props => {
  const { coords, destination, currentLocation, destinationSet, fitToCoords } = props
  console.log(destination)
  return (
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
