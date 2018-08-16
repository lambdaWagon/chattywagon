import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: hp('100%'),
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    marginLeft: wp('3%')
  }
})

export default ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <Text>Placeholder</Text>
  </SafeAreaView>
)
