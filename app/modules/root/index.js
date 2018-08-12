import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AppLoading, Asset, Font } from 'expo'
import { setCustomText, setCustomTextInput } from 'react-native-global-props'
import PropTypes from 'prop-types'

import { AppNavigator, AuthNavigator } from '../../navigators'
import { customProps } from '../../styles'

async function loadAssets() {
  const bg = require('../../../assets/splash.png')
  const fonts = Font.loadAsync({
    logo: require('../../../assets/fonts/logo.otf'),
    book: require('../../../assets/fonts/book.otf'),
    bold: require('../../../assets/fonts/bold.otf'),
    black: require('../../../assets/fonts/black.otf')
  })
  const image = Asset.fromModule(bg).downloadAsync()

  await Promise.all([fonts, image])
}

class Root extends Component {
  state = { isReady: false }

  onAssetLoad = () => {
    setCustomText(customProps.text)
    setCustomTextInput(customProps.textInput)
    this.setState({ isReady: true })
  }

  render() {
    const { isReady } = this.state
    const { user } = this.props
    if (isReady && user) {
      return <AppNavigator />
    }
    if (isReady) {
      return <AuthNavigator />
    }
    return <AppLoading startAsync={loadAssets} onFinish={this.onAssetLoad} />
  }
}

Root.defaultProps = { user: null }
Root.propTypes = { user: PropTypes.object }

const mapStateToProps = ({ authentication: { user } }) => ({ user })

export default connect(mapStateToProps)(Root)
