import React from 'react'
import { Dimensions, SafeAreaView, View, Text, TextInput, Image } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../../actions'
import { config } from '../../config/firebase'
import styles from '../../styles'

const window = Dimensions.get('window')

const searchInputTwo = {
  textInputContainer: {
    width: window.width - 10,
    top: 50,
    zIndex: 999
  },
  description: {
    fontWeight: 'bold'
  },
  predefinedPlacesDescription: {
    color: '#1faadb'
  }
}

/**
 * Work in Progress 😱
 * Please don't judge the hideous code
 */
const GooglePlacesInput = props => (
  <SafeAreaView style={styles.container}>
    <GooglePlacesAutocomplete
      fetchDetails={false}
      returnKeyType="search"
      query={{
        key: config.googlePlacesApiKey,
        language: 'en', // language of the results
        types: 'geocode', // default: 'geocode'
        location: '37.786279,-122.406456',
        radius: '15000',
        components: 'country:us'
      }}
      enablePoweredByContainer={false}
      onPress={data => props.setDestination(data)}
      // renderLeftButton={() => <Text>Back</Text>}
      styles={{
        textInputContainer: {
          backgroundColor: 'rgba(0,0,0,0)',
          borderTopWidth: 0,
          borderBottomWidth: 0
        },
        textInput: {
          marginLeft: 0,
          marginRight: 0,
          height: 38,
          color: '#5d5d5d',
          fontSize: 16,
          shadowColor: 'black',
          shadowOpacity: 0.25,
          shadowRadius: 10,
          shadowOffset: { width: 10, height: 10 }
        },
        predefinedPlacesDescription: {
          color: '#1faadb'
        }
      }}
    />
  </SafeAreaView>
)

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(GooglePlacesInput)
