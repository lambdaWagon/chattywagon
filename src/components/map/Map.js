import React, { Component, Fragment } from 'react'
import { Dimensions, InteractionManager } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Directions from './Directions'
import MarkerDriver from './MarkerDriver'
import MarkerCurrentLocation from './MarkerCurrentLocation'
import MarkerDestination from './MarkerDestination'
import MarkerOrigin from './MarkerOrigin'
import MapUISearch from './MapUISearch'

import * as actions from '../../actions'
import styles from '../../styles'
import mapStyle from '../../styles/mapStyle'

const { width, height } = Dimensions.get('window')

class Map extends Component {
  map = null

  static propTypes = {
    destinationSet: PropTypes.bool.isRequired,
    drivers: PropTypes.array.isRequired,
    navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
    region: PropTypes.object.isRequired
  }

  fitToCoords = coordinates => {
    this.map.fitToCoordinates(coordinates, {
      animated: true,
      edgePadding: {
        right: width / 4.5,
        bottom: height / 2,
        left: width / 4.5,
        top: height / 7
      }
    })
    InteractionManager.runAfterInteractions(() => {
      this.props.navigation.navigate('MapUIConfirm')
    })
  }

  render() {
    const { destinationSet, drivers, navigation, region } = this.props
    return (
      <Fragment>
        <MapView
          customMapStyle={mapStyle}
          provider={PROVIDER_GOOGLE}
          ref={c => (this.map = c)}
          region={region}
          showsPointsOfInterest={false}
          style={styles.map}
        >
          {drivers.map(d => (
            <MarkerDriver key={d.key} d={d} />
          ))}
          <Directions fitToCoords={this.fitToCoords} />
          <MarkerCurrentLocation />
          <MarkerOrigin />
          <MarkerDestination />
        </MapView>
        {destinationSet || <MapUISearch navigate={navigation.navigate} />}
      </Fragment>
    )
  }
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
