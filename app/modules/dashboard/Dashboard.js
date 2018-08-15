import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { DrawerItems } from 'react-navigation'

const avatar = require('../../../assets/avatarplaceholder.png')

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 75,
    backgroundColor: '#ff8200'
  },
  view: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: { height: 100, width: 100 }
})

export default props => (
  <View style={style.container}>
    <View style={style.view}>
      <Image style={style.image} source={avatar} />
    </View>
    <DrawerItems {...props} />
  </View>
)
