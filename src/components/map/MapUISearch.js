import React from 'react'
import { View } from 'react-native'

import SearchButton from './SearchButton'
import styles from '../../styles'

export default ({ navigate }) => (
  <View style={styles.mapUI}>
    <SearchButton navigate={navigate}>Where to?</SearchButton>
  </View>
)
