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
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowRadius: 2,
    shadowOffset: { width: 2, height: 3 }
  },
  image: {
    width: 15,
    height: 15
  },
  destinationView: {
    flexDirection: 'row',
    backgroundColor: 'white',
    maxHeight: 80,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  destinationText: {
    flex: -1,
    paddingVertical: 3,
    paddingHorizontal: 10
  },
  timeView: {
    flex: -1,
    minWidth: 37,
    minHeight: 37,
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 1,
    paddingBottom: 5,
    paddingHorizontal: 5
  },
  timeText: { fontSize: 16, color: 'white' },
  minText: { fontSize: 10, color: 'white', marginTop: -3 }
}

const MarkerDestination = ({ coordinates, destination, destinationSet, duration, setMarkerRef }) =>
  coordinates && destinationSet ? (
    <Marker
      anchor={{ x: 0.5, y: 1 }}
      calloutVisible
      ref={setMarkerRef}
      coordinate={coordinates[coordinates.length - 1]}
      zIndex={5}
    >
      <Callout tooltip style={styles.callout}>
        <View style={styles.destinationView}>
          <View style={styles.timeView}>
            <Text style={styles.timeText}>{Math.round(duration)}</Text>
            <Text style={styles.minText}>min</Text>
          </View>
          <Text style={styles.destinationText}>{destination.structured_formatting.main_text}</Text>
        </View>
      </Callout>
      <Image style={styles.image} source={require('../../../assets/marker4.png')} />
    </Marker>
  ) : null

MarkerDestination.defaultProps = {
  coordinates: null,
  duration: null
}

MarkerDestination.propTypes = {
  coordinates: PropTypes.array,
  destination: PropTypes.object.isRequired,
  destinationSet: PropTypes.bool.isRequired,
  duration: PropTypes.number,
  setMarkerRef: PropTypes.func.isRequired
}

export default connect(
  ({
    geolocation: {
      destination,
      destinationSet,
      directions: { coordinates, duration }
    }
  }) => ({ coordinates, destination, destinationSet, duration })
)(MarkerDestination)
