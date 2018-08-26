import React, { PureComponent, Fragment } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import SearchDestinaton from './SearchDestination'
import SearchPickup from './SearchPickup'
import * as actions from '../../actions'

class GooglePlacesInput extends PureComponent {
  static navigationOptions = {
    drawerLabel: () => null
  }

  destinationInput = null

  state = {
    displayPickup: false,
    displayDestination: false
  }

  setRef = r => {
    if (r) this.destinationInput = r.refs.textInput
  }

  handleDisplay = (name, bool) => this.setState({ [name]: bool })

  handlePickupSubmit = data => {
    const { setPickup } = this.props
    setPickup(data)
    this.destinationInput.focus()
  }

  handleDestination = data => {
    const { navigation, setDestination } = this.props
    setDestination(data)
    // navigation.navigate('Map')
    const { goBack, state } = navigation
    // console.log(navigation)
    goBack(state.key)
  }

  render() {
    const { displayPickup, displayDestination } = this.state

    return (
      <Fragment>
        <SearchPickup
          displayPickup={displayPickup}
          handleDisplay={this.handleDisplay}
          handlePickupSubmit={this.handlePickupSubmit}
        />
        <SearchDestinaton
          displayDestination={displayDestination}
          handleDisplay={this.handleDisplay}
          handleDestination={this.handleDestination}
          setRef={this.setRef}
        />
      </Fragment>
    )
  }
}

GooglePlacesInput.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
  setDestination: PropTypes.func.isRequired,
  setPickup: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(GooglePlacesInput)
