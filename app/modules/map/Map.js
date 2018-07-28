import React, { Component } from 'react'
import MapView, { Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { SearchBar } from '../../components'
import * as actions from '../../redux/actions'
import { config } from '../../config/firebase'
import styles from '../../styles'

class Map extends Component {
  static navigationOptions = {
    headerTransparent: true,
    headerStyle: { zIndex: 100 }
  }

  componentWillMount() {
    const { getDrivers, getLocation } = this.props
    getDrivers()
    getLocation()
  }

  render() {
    const {
      drivers,
      destination,
      destinationSet,
      locationSet,
      currentLocation,
      region,
      setDestination
    } = this.props
    console.log('>>> GOT LOC', region, locationSet)
    return (
      <MapView style={styles.map} region={region} onPress={setDestination}>
        {locationSet && (
          <Marker pinColor="blue" title="Current Location" draggable coordinate={currentLocation} />
        )}
        <Marker pinColor="yellow" title="Destination" draggable coordinate={destination} />
        {drivers.map(driver => <Marker key={driver.id} coordinate={driver} />)}
        {destinationSet && (
          <MapViewDirections
            origin={region}
            destination={destination}
            apikey={config.googleMapsApiKey}
            strokeWidth={3}
            strokeColor="#e8863c"
          />
        )}
        <SearchBar />
      </MapView>
    )
  }
}

Map.propTypes = {
  drivers: PropTypes.array.isRequired,
  destination: PropTypes.object.isRequired,
  destinationSet: PropTypes.bool.isRequired,
  getDrivers: PropTypes.func.isRequired,
  getLocation: PropTypes.func.isRequired,
  locationSet: PropTypes.bool.isRequired,
  currentLocation: PropTypes.object.isRequired,
  region: PropTypes.object.isRequired,
  setDestination: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

const mapStateToProps = state => {
  const {
    mapReducer: { currentLocation, destination, destinationSet, drivers, locationSet, region }
  } = state
  return {
    currentLocation,
    destination,
    destinationSet,
    drivers,
    locationSet,
    region
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)
