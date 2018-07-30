import React from 'react'
import { TextInput, View } from 'react-native'
import { Transition } from 'react-navigation-fluid-transitions'

import styles from '../styles'

export default () => (
  <View style={styles.searchInputFocus}>
    <Transition shared="search">
      <TextInput />
    </Transition>
  </View>
)
