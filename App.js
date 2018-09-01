import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import { AppLoading, Asset, Font, SplashScreen } from 'expo'
import { ImageBackground, YellowBox } from 'react-native'
import { setCustomText, setCustomTextInput } from 'react-native-global-props'
import LottieView from 'lottie-react-native'

import store from './src/store'
import { AppWithNavState } from './src/navigators'
import { customProps } from './src/styles'

const loadingAnim = require('./assets/loader.json')
const bg = require('./assets/splash.png')

export default class App extends PureComponent {
  state = {
    splashScreen: false,
    appReady: false
  }

  loadFontsAsync = async () => {
    SplashScreen.preventAutoHide()
    SplashScreen.hide()
    await Font.loadAsync({
      logo: require('./assets/fonts/logo.otf'),
      book: require('./assets/fonts/book.otf'),
      bold: require('./assets/fonts/bold.otf'),
      black: require('./assets/fonts/black.otf'),
      mono: require('./assets/fonts/mono-light.otf')
    })
    setCustomText(customProps.text)
    setCustomTextInput(customProps.textInput)
    setTimeout(() => {
      this.setState({ splashScreen: false, appReady: true })
    }, 2500)
  }

  loadSplashAsync = async () => Asset.fromModule(bg).downloadAsync()

  render() {
    const { appReady, splashScreen } = this.state

    if (splashScreen) {
      return (
        <ImageBackground source={bg} onLoad={this.loadFontsAsync} style={{ flex: 1 }}>
          <LottieView source={loadingAnim} style={{}} autoPlay={splashScreen} loop />
        </ImageBackground>
      )
    }
    if (appReady) {
      return (
        <Provider store={store}>
          <AppWithNavState />
        </Provider>
      )
    }
    return (
      <AppLoading
        startAsync={this.loadSplashAsync}
        onFinish={() => this.setState({ splashScreen: true })}
        autoHideSplash={false}
      />
    )
  }
}

YellowBox.ignoreWarnings([
  'Remote debugger',
  'Trying to animate a view on an unmounted component',
  "Warning: Can't call setState (or forceUpdate) on an unmounted component."
])
