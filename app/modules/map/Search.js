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
const GooglePlacesInput = props => {
  const handleSubmit = data => {
    props.setDestination(data)
    props.navigation.goBack()
  }
  console.log(props)
  return (
    <SafeAreaView style={styles.container}>
      <GooglePlacesAutocomplete
        debounce={200}
        fetchDetails={false}
        returnKeyType="search"
        minLength={2}
        placeholder="Where to?"
        query={{
          key: config.googlePlacesApiKey,
          language: 'en', // language of the results
          types: ['establishment', 'geocode'], // default: 'geocode'
          location: '37.786279,-122.406456',
          radius: '15000',
          components: 'country:us'
        }}
        nearByPlacesAPI="GooglePlacesSearch"
        GooglePlacesSearchQuery={{
          rankby: 'distance',
          types: 'establishment'
        }}
        // renderDescription={row => console.log(row)}
        enablePoweredByContainer={false}
        onPress={data => handleSubmit(data)}
        // renderLeftButton={() => <Text>Back</Text>}
        styles={{
          container: {
            backgroundColor: 'rgba(0,0,0,0)',
            top: 43
          },
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
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(GooglePlacesInput)
