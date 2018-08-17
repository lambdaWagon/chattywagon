import React from 'react'
import { AsyncStorage } from 'react-native'
import { AppLoading, Asset, Font } from 'expo'
import { setCustomText, setCustomTextInput } from 'react-native-global-props'
import PropTypes from 'prop-types'

import { customProps } from '../styles'

const loadAssets = async () => {
  const bg = require('../../assets/splash.png')
  const fonts = Font.loadAsync({
    logo: require('../../assets/fonts/logo.otf'),
    book: require('../../assets/fonts/book.otf'),
    bold: require('../../assets/fonts/bold.otf'),
    black: require('../../assets/fonts/black.otf')
  })
  const image = Asset.fromModule(bg).downloadAsync()

  await Promise.all([fonts, image])
}

const Loading = ({ navigation }) => {
  const onAssetLoad = async () => {
    const user = await AsyncStorage.getItem('user_data')

    setCustomText(customProps.text)
    setCustomTextInput(customProps.textInput)
    navigation.navigate(!user ? 'Main' : 'Auth')
  }

  return <AppLoading startAsync={loadAssets} onFinish={onAssetLoad} />
}

Loading.propTypes = { navigation: PropTypes.object.isRequired }

export default Loading
