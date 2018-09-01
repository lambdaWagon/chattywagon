import React, { PureComponent } from 'react'
import { bindActionCreators } from 'redux'
import { Animated, Modal } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import SearchDestinaton from './SearchDestination'
import SearchPickup from './SearchPickup'
import BackButton from '../shared/BackButton'
import * as actions from '../../actions'
import styles from '../../styles'

class GooglePlacesInput extends PureComponent {
  opacity = new Animated.Value(0)

  destinationInput = null

  setRef = r => {
    if (r) this.destinationInput = r.refs.textInput
  }

  handlePickupSubmit = data => {
    const { setPickup } = this.props
    setPickup(data)
    this.destinationInput.focus()
  }

  render() {
    if (this.props.searchModal) {
      Animated.timing(this.opacity, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true
      }).start()
    } else {
      Animated.timing(this.opacity, {
        toValue: 0,
        duration: 10,
        useNativeDriver: true
      }).start()
    }
    const style = {
      opacity: this.opacity.interpolate({
        inputRange: [0, 0, 1],
        outputRange: [0, 0, 1]
      })
    }

    return (
      <Modal animationType="slide" transparent visible={this.props.searchModal}>
        <Animated.View style={[styles.menuButton, style]}>
          <BackButton navigate={this.props.hideSearch} />
        </Animated.View>
        <SearchPickup handlePickupSubmit={this.handlePickupSubmit} />
        <SearchDestinaton setRef={this.setRef} />
      </Modal>
    )
  }
}

GooglePlacesInput.propTypes = {
  searchModal: PropTypes.bool.isRequired,
  setPickup: PropTypes.func.isRequired,
  hideSearch: PropTypes.func.isRequired
}

export default connect(
  ({ ui: { searchModal } }) => ({ searchModal }),
  dispatch => bindActionCreators(actions, dispatch)
)(GooglePlacesInput)
