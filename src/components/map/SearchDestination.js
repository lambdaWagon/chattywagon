import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import * as actions from '../../actions'
import { config } from '../../config/firebase'
import { searchDestStyle } from '../../styles'

const SearchDestination = ({ blurDest, destinationInput, focusDest, setDestination, setRef }) => (
  <GooglePlacesAutocomplete
    autoFocus
    debounce={200}
    enablePoweredByContainer={false}
    fetchDetails={false}
    GooglePlacesSearchQuery={{
      rankby: 'distance',
      types: 'establishment'
    }}
    listViewDisplayed={destinationInput}
    minLength={2}
    nearByPlacesAPI="GooglePlacesSearch"
    onPress={data => setDestination(data)}
    placeholder="Where to?"
    placeholderTextColor="black"
    ref={setRef}
    returnKeyType="search"
    styles={searchDestStyle}
    textInputProps={{
      onBlur: blurDest,
      onFocus: focusDest
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
  destinationInput: PropTypes.bool.isRequired,
  blurDest: PropTypes.func.isRequired,
  focusDest: PropTypes.func.isRequired,
  setDestination: PropTypes.func.isRequired,
  setRef: PropTypes.func.isRequired
}

export default connect(
  ({ ui: { destinationInput } }) => ({ destinationInput }),
  dispatch => bindActionCreators(actions, dispatch)
)(SearchDestination)
