import React from 'react'
import { Image, Text, View } from 'react-native'
import { Marker } from 'react-native-maps'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const styles = {
  image: { width: 15, height: 15, marginTop: 5 },
  destinationView: {
    flex: 1,
    flexDirection: 'row',
    minWidth: 75,
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 2,
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.35,
    shadowRadius: 2,
    shadowOffset: { width: 2, height: 3 }
  },
  destinationText: {
    flex: 1,
    paddingVertical: 3,
    paddingHorizontal: 10
  }
}

const MarkerDestination = ({ coordinates, destination, destinationSet }) =>
  coordinates && destinationSet ? (
    <Marker anchor={{ x: 0.05, y: 1 }} coordinate={coordinates[coordinates.length - 1]} zIndex={5}>
      <View style={styles.destinationView}>
        <Text style={styles.destinationText}>{destination.structured_formatting.main_text}</Text>
      </View>
      <Image style={styles.image} source={require('../../../assets/marker4.png')} />
    </Marker>
  ) : null

MarkerDestination.defaultProps = {
  coordinates: null
}

MarkerDestination.propTypes = {
  coordinates: PropTypes.array,
  destination: PropTypes.object.isRequired,
  destinationSet: PropTypes.bool.isRequired
}

export default connect(
  ({
    geolocation: {
      destination,
      destinationSet,
      directions: { coordinates }
    }
  }) => ({ coordinates, destination, destinationSet }),
  null
)(MarkerDestination)
