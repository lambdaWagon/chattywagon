import React from 'react'
import { Image, Text, View } from 'react-native'
import { Callout, Marker } from 'react-native-maps'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const styles = {
  container: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowRadius: 5,
    shadowOffset: { width: 5, height: 5 }
  },
  bubble: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: 'white',
    borderRadius: 2
  },
  destinationText: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 3,
    paddingHorizontal: 10
  },
  timeView: {
    flex: -1,
    minWidth: 30,
    minHeight: 30,
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 3,
    paddingHorizontal: 5
  },
  timeText: { fontSize: 16, color: 'white' },
  minText: { fontSize: 10, color: 'white', marginTop: -3 },
  image: {
    marginTop: 4,
    width: 15,
    height: 15
  }
}

const MarkerDestination = ({
  coordinates,
  destination,
  destinationSet,
  duration,
  setMarkerRef
}) => {
  let width = null
  if (destination && destination.structured_formatting) {
    const { length } = destination.structured_formatting.main_text
    if (length < 5) {
      // yelp [4]
      width = 80
    } else if (length >= 5 && length <= 8) {
      // macy's [6]
      width = 100
    } else if (length <= 10) {
      // art's cafe [10]
      width = 115
    } else if (length > 10 && length < 15) {
      // 1 3rd street [12]
      // real guitars [12]
      // smugmug inc [11]
      width = 140
    } else if (length >= 16 || length <= 20) {
      width = length * 8 + 26
    } else if (length > 30) {
      width = 200
    } else {
      width = length * 10 + 25
    }
    console.log(destination.structured_formatting.main_text, length, width)
  }

  return coordinates && destinationSet ? (
    <Marker
      anchor={{ x: 0.5, y: 1 }}
      calloutVisible
      coordinate={coordinates[coordinates.length - 1]}
      ref={setMarkerRef}
      zIndex={5}
    >
      <Callout tooltip>
        <View style={[styles.container, { width }]}>
          <View style={styles.bubble}>
            <View style={styles.timeView}>
              <Text style={styles.timeText}>{Math.round(duration)}</Text>
              <Text style={styles.minText}>min</Text>
            </View>
            <View style={styles.destinationText}>
              <Text numberOfLines={1} ellipsizeMode="clip">
                {destination.structured_formatting.main_text}
              </Text>
            </View>
          </View>
        </View>
      </Callout>
      <Image style={styles.image} source={require('../../../assets/marker4.png')} />
    </Marker>
  ) : null
}

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
