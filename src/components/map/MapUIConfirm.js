import React from 'react'
import { View } from 'react-native'

import Button from '../shared/Button'
import styles from '../../styles'

const MapUIConfirm = () => (
  <View pointerEvents="box-none" style={styles.mapUI}>
    <Button style={{ marginBottom: 50 }} navigate={() => console.log('Confirmed')}>
      CONFIRM RIDE
    </Button>
  </View>
)

MapUIConfirm.navigationOptions = {
  drawerLabel: () => null
}

export default MapUIConfirm
