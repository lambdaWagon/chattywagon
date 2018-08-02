import React, { Component } from 'react'
import { Dimensions } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Directions from './Directions'
import Search from './Search'
import * as actions from '../../actions'
import styles from '../../styles'

const { width, height } = Dimensions.get('window')

const region = {
  latitude: 37.785834,
  longitude: -122.406417,
  latitudeDelta: 0.00922,
  longitudeDelta: 0.004258004926108375
}

class Map extends Component {
  static navigationOptions = {
    headerTransparent: true,
    headerStyle: { zIndex: 100 }
  }

  map = null

  state = { coordinates: null }

  fitToCoords = ({ coordinates }) => {
    this.setState({ coordinates })
    this.map.fitToCoordinates(coordinates, {
      edgePadding: {
        right: width / 10,
        bottom: height / 3,
        left: width / 10,
        top: height / 10
      }
    })
  }

  render() {
    const { coordinates } = this.state
    const { currentLocation, drivers, locationSet } = this.props

    return (
      <MapView ref={c => (this.map = c)} style={styles.map} initialRegion={region}>
        {locationSet && (
          <Marker pinColor="blue" title="Current Location" draggable coordinate={currentLocation} />
        )}
        {drivers.map(d => <Marker key={d.key} coordinate={d} />)}
        <Directions coords={coordinates} fitToCoords={this.fitToCoords} />
        <Search />
      </MapView>
    )
  }
}

Map.propTypes = {
  currentLocation: PropTypes.object.isRequired,
  drivers: PropTypes.array.isRequired,
  // destination: PropTypes.object.isRequired,
  // destinationSet: PropTypes.bool.isRequired,
  locationSet: PropTypes.bool.isRequired
  // navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
  // region: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  const {
    geolocation: {
      // address,
      currentLocation,
      // destination,
      // destinationSet,
      drivers,
      locationSet
      // region
    }
  } = state
  return {
    // address,
    currentLocation,
    // destination,
    // destinationSet,
    drivers,
    locationSet,
    region
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)
