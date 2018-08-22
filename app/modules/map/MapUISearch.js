import React from 'react'
import { View, Platform, Dimensions, Text } from 'react-native'

import SearchButton from './SearchButton'
import styles from '../../styles'

const { height, width } = Dimensions.get('window')

export default ({ navigate }) => (
  <View style={styles.mapUI}>
    <SearchButton navigate={navigate}>Where to?</SearchButton>
  </View>
)
