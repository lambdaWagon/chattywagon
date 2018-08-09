import React from 'react'
import { Dimensions, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

const style = {
  button: {
    backgroundColor: 'white',
    borderRadius: 2,
    height: 40,
    width: Dimensions.get('window').width - 20,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 10, height: 10 }
  },
  buttonText: {
    fontSize: 16,
    padding: 10
  }
}

const SearchButton = ({ children, distance, duration, navigation: { navigate } }) => (
  <TouchableOpacity style={style.button} activeOpacity={0.9} onPress={() => navigate('Search')}>
    <Text style={style.buttonText}>
      {distance && duration
        ? `${distance.toFixed(1)} miles, ${Math.round(duration)} minutes`
        : children}
    </Text>
  </TouchableOpacity>
)

SearchButton.defaultProps = {
  children: null,
  distance: null,
  duration: null
}

SearchButton.propTypes = {
  children: PropTypes.string,
  distance: PropTypes.number,
  duration: PropTypes.number,
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired
}

export default SearchButton
