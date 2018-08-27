import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Animated, TouchableOpacity } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import PropTypes from 'prop-types'

class MenuButton extends Component {
  static propTypes = {
    nav: PropTypes.object.isRequired,
    // navigation: PropTypes.object.isRequired,
    toggle: PropTypes.func.isRequired
  }

  // state = { active: false }

  // componentDidMount() {
  //   if (!this.props.nav.isDrawerOpen && this.state.active) {
  //     this.closeAnimation()
  //   }
  // }

  shouldComponentUpdate(nextProps, nextState) {
    // if (this.state.active !== nextState.active) {
    //   return true
    // }
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
    // this.setState({ active: false })
  }

  openAnimation = () => {
    Animated.parallel([
      Animated.spring(this.topBar, { toValue: 0.9, useNativeDriver: true }),
      Animated.spring(this.bottomBar, { toValue: 0.9, useNativeDriver: true }),
      Animated.spring(this.bottomBarX, { toValue: -10, useNativeDriver: true }),
      Animated.spring(this.bottomBarY, { toValue: -10, useNativeDriver: true }),
      Animated.spring(this.middleBarOpacity, { toValue: 0, useNativeDriver: true })
    ]).start()
    // this.setState({ active: true })
  }

  animate = () => {
    if (this.props.nav.isDrawerOpen) {
      this.closeAnimation()
      this.props.toggle()
    } else {
      this.openAnimation()
      this.props.toggle()
    }
  }

  render() {
    // console.log(this.state.active)
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
      },
      button: {
        position: 'absolute',
        marginLeft: wp('6%'),
        marginTop: hp('6%'),
        zIndex: 999
      }
    }

    return (
      <TouchableOpacity style={styles.button} onPress={this.animate}>
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

const mapDispatchToProps = dispatch => ({ toggle: () => dispatch({ type: 'TOGGLE_DRAWER' }) })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuButton)
