import React, { Fragment } from 'react'
import { Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../../actions'
import { config } from '../../config/firebase'

const Directions = props => {
  const { address, coords, currentLocation, destinationSet, fitToCoords } = props
  return (
    <Fragment>
      {destinationSet && (
        <MapViewDirections
          origin={currentLocation}
          destination={address}
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

const mapStateToProps = ({ geolocation: { address, currentLocation, destinationSet } }) => ({
  address,
  currentLocation,
  destinationSet
})

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Directions)
