import React from 'react'
import { TextInput, View } from 'react-native'
import { Transition } from 'react-navigation-fluid-transitions'

import styles from '../styles'

const myCustomTransitionFunction = transitionInfo => {
  const { progress, start, end } = transitionInfo
  const scaleInterpolation = progress.interpolate({
    inputRange: [0, start, end, 1],
    outputRange: [88, 80, 1, 1]
  })
  return { transform: [{ scale: scaleInterpolation }] }
}

export default () => (
  <View style={styles.searchInputFocus}>
    <Transition appear={myCustomTransitionFunction} shared="search">
      <TextInput />
    </Transition>
  </View>
)
