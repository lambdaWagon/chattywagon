import React from 'react'
import { Image, Text, View } from 'react-native'
import { Callout, Marker } from 'react-native-maps'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const styles = {
  callout: {
    flex: 1,
    flexGrow: 1,
    minWidth: 150,
    position: 'absolute'
  },
  image: { width: 15, height: 15, marginTop: 5 },
  originView: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 2,
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.35,
    shadowRadius: 2,
    shadowOffset: { width: 2, height: 3 }
  },
  originText: { paddingVertical: 3, paddingHorizontal: 10 },
  timeView: {
    flex: 0,
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 3,
    paddingHorizontal: 10
  },
  timeText: { fontSize: 16, color: 'white' },
  minText: { fontSize: 10, color: 'white', marginTop: -1 }
}

const MarkerOrigin = ({
  address,
  coordinates,
  duration,
  pickupLocation,
  pickupLocationSet,
  setMarkerRef
}) =>
  coordinates ? (
    <Marker
      anchor={{ x: 0.05, y: 1 }}
      coordinate={coordinates[0]}
      calloutVisible
      ref={setMarkerRef}
      zIndex={5}
    >
      <Callout tooltip style={styles.callout}>
        <View style={styles.originView}>
          <View style={styles.timeView}>
            <Text style={styles.timeText}>{Math.round(duration)}</Text>
            <Text style={styles.minText}>min</Text>
          </View>
          {pickupLocationSet ? (
            <Text style={styles.originText}>{pickupLocation.structured_formatting.main_text}</Text>
          ) : (
            <Text style={styles.originText}>{address.substr(0, address.indexOf(','))}</Text>
          )}
        </View>
      </Callout>
      <Image style={styles.image} source={require('../../../assets/marker4.png')} />
    </Marker>
  ) : null

MarkerOrigin.defaultProps = {
  address: null,
  coordinates: null,
  duration: null
}

MarkerOrigin.propTypes = {
  address: PropTypes.string,
  coordinates: PropTypes.array,
  duration: PropTypes.number,
  pickupLocation: PropTypes.object.isRequired,
  pickupLocationSet: PropTypes.bool.isRequired,
  setMarkerRef: PropTypes.func.isRequired
}

export default connect(
  ({
    geolocation: {
      currentLocation: { address },
      directions: { coordinates, duration },
      pickupLocation,
      pickupLocationSet
    }
  }) => ({
    address,
    coordinates,
    duration,
    pickupLocation,
    pickupLocationSet
  }),
  null
)(MarkerOrigin)
