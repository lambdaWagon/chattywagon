import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import PropTypes from 'prop-types'

import { config } from '../../config/firebase'
import { searchDestStyle } from '../../styles'

const SearchDestination = ({ displayDestination, handleDisplay, handleDestination, setRef }) => (
  <GooglePlacesAutocomplete
    autoFocus
    debounce={200}
    enablePoweredByContainer={false}
    fetchDetails={false}
    GooglePlacesSearchQuery={{
      rankby: 'distance',
      types: 'establishment'
    }}
    listViewDisplayed={displayDestination}
    minLength={2}
    nearByPlacesAPI="GooglePlacesSearch"
    onPress={data => handleDestination(data)}
    placeholder="Where to?"
    placeholderTextColor="black"
    ref={setRef}
    returnKeyType="search"
    styles={searchDestStyle}
    textInputProps={{
      onBlur: () => handleDisplay(displayDestination, false),
      onFocus: () => handleDisplay(displayDestination, true)
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

SearchDestination.propTypes = {
  displayDestination: PropTypes.bool.isRequired,
  handleDisplay: PropTypes.func.isRequired,
  handleDestination: PropTypes.func.isRequired,
  setRef: PropTypes.func.isRequired
}

export default SearchDestination
