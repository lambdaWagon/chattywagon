import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import PropTypes from 'prop-types'

import { config } from '../../config/firebase'
import { searchPickupStyle } from '../../styles'

const SearchPickup = ({ displayPickup, handleDisplay, handlePickupSubmit }) => (
  <GooglePlacesAutocomplete
    autoFocus={false}
    currentLocation
    debounce={200}
    enablePoweredByContainer={false}
    fetchDetails={false}
    GooglePlacesSearchQuery={{
      rankby: 'distance',
      types: 'establishment'
    }}
    listViewDisplayed={displayPickup}
    minLength={2}
    nearByPlacesAPI="GooglePlacesSearch"
    onPress={data => handlePickupSubmit(data)}
    placeholder="Current Location"
    placeholderTextColor="#ed8352"
    returnKeyType="search"
    styles={searchPickupStyle}
    textInputProps={{
      onBlur: () => handleDisplay(displayPickup, false),
      onFocus: () => handleDisplay(displayPickup, true)
    }}
    query={{
      key: config.apiKey,
      language: 'en',
      types: ['establishment', 'geocode'],
      location: '37.786279,-122.406456',
      radius: '15000',
      components: 'country:us'
    }}
  />
)

SearchPickup.propTypes = {
  displayPickup: PropTypes.bool.isRequired,
  handleDisplay: PropTypes.func.isRequired,
  handlePickupSubmit: PropTypes.func.isRequired
}

export default SearchPickup
