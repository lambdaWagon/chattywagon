import React from 'react'
import { Dimensions, View } from 'react-native'

import Button from '../shared/Button'
import styles from '../../styles'

const { height } = Dimensions.get('window')

const MapUIConfirm = () => (
  <View pointerEvents="box-none" style={styles.mapUI}>
    <Button style={{ top: height - 173 }} navigate={() => console.log('Confirmed')}>
      CONFIRM RIDE
    </Button>
  </View>
)

MapUIConfirm.navigationOptions = {
  drawerLabel: () => null
}

export default MapUIConfirm
