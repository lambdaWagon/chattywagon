import React, { Component, Fragment } from 'react'
import { Dimensions, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Directions from './Directions'
import SearchButton from './SearchButton'
import * as actions from '../../actions'
import styles from '../../styles'

const { width, height } = Dimensions.get('window')

/* prod: get region from currentLocation */
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

  state = {
    coordinates: null,
    distance: null,
    duration: null
  }

  handleDirections = ({ coordinates, distance, duration }) => {
    this.setState({ coordinates, distance, duration })
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
    const { currentLocation, drivers, locationSet, navigation } = this.props

    return (
      <Fragment>
        <MapView ref={c => (this.map = c)} style={styles.map} initialRegion={region}>
          {locationSet && (
            <Marker
              pinColor="blue"
              title="Current Location"
              draggable
              coordinate={currentLocation}
            />
          )}
          {drivers.map(d => (
            <Marker key={d.key} coordinate={d} />
          ))}
          <Directions coords={coordinates} handleDirections={this.handleDirections} />
        </MapView>
        <View style={styles.mapUI}>
          <SearchButton {...this.state} navigation={navigation}>
            Where to?
          </SearchButton>
        </View>
      </Fragment>
    )
  }
}

Map.propTypes = {
  currentLocation: PropTypes.object.isRequired,
  drivers: PropTypes.array.isRequired,
  locationSet: PropTypes.bool.isRequired,
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired
}

const mapStateToProps = ({ geolocation: { currentLocation, drivers, locationSet } }) => ({
  currentLocation,
  drivers,
  locationSet
})

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)
