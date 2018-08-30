import React from 'react'
import { Dimensions, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

const style = {
  button: {
    backgroundColor: 'white',
    borderRadius: 2,
    height: 40,
    width: Dimensions.get('window').width - 20,
    marginTop: 100,
    marginBottom: 100,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 4 }
  },
  buttonText: {
    fontSize: 16,
    padding: 10
  }
}

const SearchButton = ({ children, distance, duration, navigate }) => (
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
  navigate: PropTypes.func.isRequired
}

export default SearchButton
