import React from 'react'
import { TextInput, TouchableOpacity } from 'react-native'
import { Transition } from 'react-navigation-fluid-transitions'
import PropTypes from 'prop-types'

import styles from '../styles'

export default function SearchBar({ navigation: { navigate } }) {
  return (
    <TouchableOpacity onPress={() => navigate('Search')} style={styles.searchBar}>
      {/* <Transition shared="search"> */}
      <TextInput pointerEvents="none" placeholder="Where to?" style={styles.searchInput} />
      {/* </Transition> */}
    </TouchableOpacity>
  )
}

SearchBar.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired
}
