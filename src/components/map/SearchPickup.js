import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import * as actions from '../../actions'
import { config } from '../../config/firebase'
import { searchPickupStyle } from '../../styles'

const SearchPickup = ({ handlePickupSubmit, pickupInput, blurPickup, focusPickup }) => (
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
    listViewDisplayed={pickupInput}
    minLength={2}
    nearByPlacesAPI="GooglePlacesSearch"
    onPress={data => handlePickupSubmit(data)}
    placeholder="Current Location"
    placeholderTextColor="#ed8352"
    returnKeyType="search"
    styles={searchPickupStyle}
    textInputProps={{
      onBlur: blurPickup,
      onFocus: focusPickup
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
  blurPickup: PropTypes.func.isRequired,
  focusPickup: PropTypes.func.isRequired,
  handlePickupSubmit: PropTypes.func.isRequired,
  pickupInput: PropTypes.bool.isRequired
}

export default connect(
  ({ ui: { pickupInput } }) => ({ pickupInput }),
  dispatch => bindActionCreators(actions, dispatch)
)(SearchPickup)
