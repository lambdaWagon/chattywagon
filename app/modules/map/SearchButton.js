import React from 'react'
import { Platform, TextInput, TouchableOpacity } from 'react-native'

import styles from '../../styles'

export default ({ navigation: { navigate } }) => {
  return Platform.OS === 'ios' ? (
    <TextInput
      editable={false}
      placeholder="Where to?"
      style={styles.searchInput}
      onTouchStart={() => navigate('Search')}
    />
  ) : (
    <TouchableOpacity onPress={() => navigate('Search')}>
      <TextInput
        editable={false}
        placeholder="Where to?"
        pointerEvents="none"
        style={styles.searchInput}
      />
    </TouchableOpacity>
  )
}
