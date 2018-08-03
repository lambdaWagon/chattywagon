import React from 'react'
import { Platform, TextInput, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

import styles from '../../styles'

const SearchButton = ({ navigation: { navigate } }) =>
  Platform.OS === 'ios' ? (
    <TextInput
      editable={false}
      placeholder="Where to?"
      placeholderTextColor="black"
      style={styles.searchInput}
      onTouchStart={() => navigate('Search')}
    />
  ) : (
    <TouchableOpacity onPress={() => navigate('Search')}>
      <TextInput
        editable={false}
        placeholder="Where to?"
        placeholderTextColor="black"
        pointerEvents="none"
        style={styles.searchInput}
      />
    </TouchableOpacity>
  )

SearchButton.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired
}

export default SearchButton
