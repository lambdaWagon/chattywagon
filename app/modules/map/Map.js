import React, { Component, Fragment } from 'react'
import { Dimensions } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Search from './Search'
import * as Actions from '../../actions'
import { config } from '../../config/firebase'
import styles from '../../styles'

const { width, height } = Dimensions.get('window')

class Map extends Component {
  static navigationOptions = {
    headerTransparent: true,
    headerStyle: { zIndex: 100 }
  }

  map = null

  state = { coordinates: null }

  componentWillMount() {
    const { currentLocation, getDrivers, getLocation } = this.props
    getLocation()
    getDrivers()
    // updateDrivers()
  }

  render() {
    const { coordinates, destination } = this.state
    const { address, currentLocation, destinationSet, drivers, locationSet, region } = this.props
    return (
      <MapView ref={c => (this.map = c)} style={styles.map} region={region}>
        {locationSet && (
          <Marker pinColor="blue" title="Current Location" draggable coordinate={currentLocation} />
        )}
        {drivers.map(driver => <Marker key={driver.id} coordinate={driver} />)}
        {destinationSet && (
          <Fragment>
            <MapViewDirections
              origin={currentLocation}
              destination={address}
              apikey={config.googleMapsApiKey}
              strokeWidth={3}
              strokeColor="black"
              onStart={params =>
                console.log(
                  `Started routing between "${params.origin}" and "${params.destination}"`
                )
              }
              onReady={({ coordinates }) => {
                this.setState({ coordinates })
                this.map.fitToCoordinates(coordinates, {
                  edgePadding: {
                    right: width / 10,
                    bottom: height / 3,
                    left: width / 10,
                    top: height / 10
                  }
                })
              }}
            />
          </Fragment>
        )}
        {coordinates && (
          <Marker
            pinColor="yellow"
            title="Destination"
            draggable
            coordinate={coordinates[coordinates.length - 1]}
          />
        )}
        <Search />
      </MapView>
    )
  }
}

Map.propTypes = {
  currentLocation: PropTypes.object.isRequired,
  drivers: PropTypes.array.isRequired,
  destination: PropTypes.object.isRequired,
  destinationSet: PropTypes.bool.isRequired,
  locationSet: PropTypes.bool.isRequired,
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
  region: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  const {
    geolocation: {
      address,
      currentLocation,
      destination,
      destinationSet,
      drivers,
      locationSet,
      region
    }
  } = state
  return {
    address,
    currentLocation,
    destination,
    destinationSet,
    drivers,
    locationSet,
    region
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)
