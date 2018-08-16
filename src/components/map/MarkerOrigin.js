import React from 'react'
import { Image, Text, View } from 'react-native'
import { Marker } from 'react-native-maps'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const styles = {
  image: {
    width: 15,
    height: 15,
    marginTop: 5
  },
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
  originText: {
    paddingVertical: 3,
    paddingHorizontal: 10
  }
}

const MarkerOrigin = ({ address, coordinates, pickupLocation, pickupLocationSet }) =>
  coordinates ? (
    <Marker anchor={{ x: 0.05, y: 1 }} coordinate={coordinates[0]} zIndex={5}>
      <View style={styles.originView}>
        {pickupLocationSet ? (
          <Text style={styles.originText}>{pickupLocation.structured_formatting.main_text}</Text>
        ) : (
          <Text style={styles.originText}>{address.substr(0, address.indexOf(','))}</Text>
        )}
      </View>
      <Image style={styles.image} source={require('../../../assets/marker4.png')} />
    </Marker>
  ) : null

MarkerOrigin.defaultProps = {
  address: null,
  coordinates: null
}

MarkerOrigin.propTypes = {
  address: PropTypes.string,
  coordinates: PropTypes.array,
  pickupLocation: PropTypes.object.isRequired,
  pickupLocationSet: PropTypes.bool.isRequired
}

export default connect(
  ({
    geolocation: {
      currentLocation: { address },
      directions: { coordinates },
      pickupLocation,
      pickupLocationSet
    }
  }) => ({
    address,
    coordinates,
    pickupLocation,
    pickupLocationSet
  })
)(MarkerOrigin)
