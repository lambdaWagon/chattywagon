import React, { Component, Fragment } from 'react'
import { Dimensions } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Button from '../common/Button'
import Directions from './Directions'
import SearchButton from './SearchButton'
import MarkerDriver from './MarkerDriver'
import MarkerCurrentLocation from './MarkerCurrentLocation'
import MarkerDestination from './MarkerDestination'
import MarkerOrigin from './MarkerOrigin'
import MapUISearch from './MapUISearch'
import MapUIConfirm from './MapUIConfirm'

import * as actions from '../../actions'
import styles from '../../styles'
import mapStyle from '../../styles/mapStyle'

const { width, height } = Dimensions.get('window')

class Map extends Component {
  static navigationOptions = {
    headerTransparent: true,
    headerStyle: { zIndex: 100 }
  }

  map = null

  marker = null

  setMarkerRef = m => (this.marker = m)

  fitToCoords = coordinates => {
    this.map.fitToCoordinates(coordinates, {
      edgePadding: {
        right: width / 5,
        bottom: height / 5,
        left: width / 5,
        top: height / 5
      }
    })
  }

  render() {
    const { destinationSet, drivers, navigation, region } = this.props
    return (
      <Fragment>
        <MapView
          customMapStyle={mapStyle}
          initialRegion={region}
          provider={PROVIDER_GOOGLE}
          ref={c => (this.map = c)}
          onRegionChangeComplete={() => this.marker && this.marker.showCallout()}
          showsPointsOfInterest={false}
          style={styles.map}
        >
          {drivers.map(d => <MarkerDriver key={d.key} d={d} />)}
          <Directions fitToCoords={this.fitToCoords} />
          {!destinationSet && <MarkerCurrentLocation />}
          <MarkerOrigin setMarkerRef={this.setMarkerRef} />
          <MarkerDestination />
        </MapView>
        {destinationSet ? (
          <MapUIConfirm navigate={navigation.navigate} />
        ) : (
          <MapUISearch navigate={navigation.navigate} />
        )}
      </Fragment>
    )
  }
}

Map.propTypes = {
  destinationSet: PropTypes.bool.isRequired,
  drivers: PropTypes.array.isRequired,
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
  region: PropTypes.object.isRequired
}

const mapStateToProps = ({ geolocation: { destinationSet, drivers, region } }) => ({
  destinationSet,
  drivers,
  region
})

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)
