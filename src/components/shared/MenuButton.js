import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Animated, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

import * as actions from '../../actions'
import style from '../../styles'

class MenuButton extends Component {
  static propTypes = {
    nav: PropTypes.object.isRequired,
    toggleDrawer: PropTypes.func.isRequired
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.nav.isDrawerOpen !== nextProps.nav.isDrawerOpen) {
      return true
    }
    return false
  }

  closeAnimation = () => {
    const config = { toValue: 0, useNativeDriver: true }
    Animated.parallel([
      Animated.spring(this.topBar, config),
      Animated.spring(this.bottomBar, config),
      Animated.spring(this.bottomBarX, config),
      Animated.spring(this.bottomBarY, config),
      Animated.spring(this.middleBarOpacity, { toValue: 1, useNativeDriver: true })
    ]).start()
  }

  openAnimation = () => {
    Animated.parallel([
      Animated.spring(this.topBar, { toValue: 0.9, useNativeDriver: true }),
      Animated.spring(this.bottomBar, { toValue: 0.9, useNativeDriver: true }),
      Animated.spring(this.bottomBarX, { toValue: -10, useNativeDriver: true }),
      Animated.spring(this.bottomBarY, { toValue: -10, useNativeDriver: true }),
      Animated.spring(this.middleBarOpacity, { toValue: 0, useNativeDriver: true })
    ]).start()
  }

  animate = () => {
    if (this.props.nav.isDrawerOpen) {
      this.closeAnimation()
      this.props.toggleDrawer()
    } else {
      this.openAnimation()
      this.props.toggleDrawer()
    }
  }

  render() {
    this.bottomBar = this.bottomBar || new Animated.Value(0)
    this.bottomBarX = this.bottomBarX || new Animated.Value(0)
    this.bottomBarY = this.bottomBarY || new Animated.Value(0)
    this.middleBarOpacity = this.middleBarOpacity || new Animated.Value(1)
    this.topBar = this.topBar || new Animated.Value(0)
    this.topBarMargin = this.topBarMargin || new Animated.Value(0)

    const styles = {
      container: {
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center'
      },
      topBar: {
        height: 3,
        width: 25,
        marginBottom: 0,
        backgroundColor: 'black',
        transform: [
          {
            rotate: this.topBar.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '-50deg']
            })
          }
        ]
      },
      middleBar: {
        height: 3,
        width: 25,
        opacity: this.middleBarOpacity,
        backgroundColor: 'black',
        marginTop: 4
      },
      bottomBar: {
        height: 3,
        width: 25,
        marginTop: 4,
        backgroundColor: 'black',
        transform: [
          {
            rotate: this.bottomBar.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '50deg']
            })
          },
          { translateX: this.bottomBarX },
          { translateY: this.bottomBarY }
        ]
      }
    }

    return (
      <TouchableOpacity style={style.menuButton} onPress={this.animate}>
        <Animated.View style={styles.container}>
          <Animated.View style={styles.topBar} />
          <Animated.View style={styles.middleBar} />
          <Animated.View style={styles.bottomBar} />
        </Animated.View>
      </TouchableOpacity>
    )
  }
}

const mapStateToProps = state => ({ nav: state.navigation.routes[1] })

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuButton)
