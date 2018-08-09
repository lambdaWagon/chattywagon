import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AppLoading, Font } from 'expo'
import { setCustomText, setCustomTextInput } from 'react-native-global-props'
import PropTypes from 'prop-types'

import { AppNavigator, AuthNavigator } from '../../navigators'
import { customProps } from '../../styles'

class Root extends Component {
  state = { isReady: false }

  async componentDidMount() {
    await Font.loadAsync({
      logo: require('../../../assets/fonts/logo.otf'),
      book: require('../../../assets/fonts/book.otf'),
      bold: require('../../../assets/fonts/bold.otf'),
      black: require('../../../assets/fonts/black.otf')
    })
    this.setState({ isReady: true })
    setCustomText(customProps.text)
    setCustomTextInput(customProps.textInput)
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
    return <AppLoading />
  }
}

Root.defaultProps = { user: null }
Root.propTypes = { user: PropTypes.object }

const mapStateToProps = ({ authentication: { user } }) => ({ user })

export default connect(mapStateToProps)(Root)
