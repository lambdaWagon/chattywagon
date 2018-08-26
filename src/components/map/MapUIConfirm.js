import React, { Component } from 'react'
import { Animated, View } from 'react-native'

import Button from '../shared/Button'
import styles from '../../styles'

class MapUIConfirm extends Component {
  state = {
    value: new Animated.Value(0),
    translateY: new Animated.Value(0)
  }

  componentDidMount() {
    const { value, translateY } = this.state
    Animated.stagger(500, [
      Animated.spring(translateY, { toValue: 1 }).start(),
      Animated.timing(value, { toValue: 1, duration: 1000 }).start()
    ])
  }

  render() {
    const { value, translateY } = this.state
    const moveValue = value.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -300]
    })
    const moveY = translateY.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -300]
    })
    const z = {
      vue: {
        bottom: -300,
        transform: [{ translateY: moveValue }]
      },
      view: {
        bottom: -300,
        transform: [{ translateY: moveY }],
        position: 'absolute'
      }
    }

    return (
      <View pointerEvents="box-none" style={styles.mapUI}>
        <Animated.View style={[styles.mapUIContainer, z.vue]} />
        <Animated.View style={z.view}>
          <Button style={{ marginBottom: 25 }} navigate={() => console.log('Confirmed')}>
            CONFIRM RIDE
          </Button>
        </Animated.View>
      </View>
    )
  }
}

export default MapUIConfirm
