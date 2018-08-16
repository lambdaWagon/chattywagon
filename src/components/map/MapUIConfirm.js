import React from 'react'
import { Dimensions, View } from 'react-native'

import Button from '../shared/Button'
import styles from '../../styles'

const { height } = Dimensions.get('window')

export default () => (
  <View style={styles.mapUI}>
    <Button style={{ top: height - 173 }} navigate={() => console.log('Confirmed')}>
      CONFIRM RIDE
    </Button>
  </View>
)
