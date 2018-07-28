import React from 'react'
import { TextInput, View } from 'react-native'
import { Transition } from 'react-navigation-fluid-transitions'
import PropTypes from 'prop-types'

import styles from '../styles'

const myCustomTransitionFunction = transitionInfo => {
  const { progress, start, end } = transitionInfo
  const scaleInterpolation = progress.interpolate({
    inputRange: [0, start, end, 1],
    outputRange: [88, 80, 1, 1]
  })
  return { transform: [{ scale: scaleInterpolation }] }
}

export default function SearchBar({ navigation: { navigate } }) {
  return (
    <View style={styles.searchInput}>
      <Transition disappear={myCustomTransitionFunction} shared="search">
        <TextInput onKeyPress={() => navigate('Search')} />
      </Transition>
    </View>
  )
}

SearchBar.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired
}
