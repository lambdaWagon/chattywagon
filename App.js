import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import { AppLoading, Asset, Font } from 'expo'
import { setCustomText, setCustomTextInput } from 'react-native-global-props'

import store from './src/store'
import { AppWithNavState } from './src/navigators'
import { customProps } from './src/styles'

export default class App extends PureComponent {
  state = { isReady: false }

  onAssetLoad = () => {
    setCustomText(customProps.text)
    setCustomTextInput(customProps.textInput)
    this.setState({ isReady: true })
  }

  loadAssets = async () => {
    const bg = require('./assets/splash.png')
    const fonts = Font.loadAsync({
      logo: require('./assets/fonts/logo.otf'),
      book: require('./assets/fonts/book.otf'),
      bold: require('./assets/fonts/bold.otf'),
      black: require('./assets/fonts/black.otf')
    })
    const image = Asset.fromModule(bg).downloadAsync()

    await Promise.all([fonts, image])
  }

  render() {
    if (this.state.isReady) {
      return (
        <Provider store={store}>
          <AppWithNavState />
        </Provider>
      )
    }
    return <AppLoading startAsync={this.loadAssets} onFinish={this.onAssetLoad} />
  }
}

console.ignoredYellowBox = ['Remote debugger']
