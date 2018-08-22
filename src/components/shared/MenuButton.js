import React, { Component } from 'react'
import { Animated, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

export default class MenuButton extends Component {
  static propTypes = {
    drawerState: PropTypes.bool.isRequired,
    navigate: PropTypes.func.isRequired,
    style: PropTypes.number.isRequired
  }

  state = { active: false }

  cross = () => {
    if (this.state.active && this.props.drawerState) {
      this.setState({ active: false })

      Animated.spring(this.topBar, { toValue: 0 }).start()
      Animated.spring(this.bottomBar, { toValue: 0 }).start()
      Animated.spring(this.bottomBarMargin, { toValue: 4 }).start()
      Animated.spring(this.middleBarOpacity, { toValue: 1, duration: 1200 }).start()
    } else {
      Animated.spring(this.topBar, { toValue: 0.9 }).start()
      Animated.spring(this.bottomBar, { toValue: 0.9 }).start()
      Animated.spring(this.bottomBarMargin, { toValue: -10 }).start()
      Animated.spring(this.middleBarOpacity, { toValue: 0, duration: 30 }).start()
    }
  }

  animate = () => {
    this.setState(prev => ({ active: !prev.active }))
    this.cross()
    this.props.navigate()
  }

  render() {
    const { drawerState, style } = this.props
    // console.log(drawerState)
    if (this.state.active) {
      this.topBar = this.topBar || new Animated.Value(0.9)
      this.bottomBar = this.bottomBar || new Animated.Value(0.9)
      this.bottomBarMargin = this.bottomBarMargin || new Animated.Value(-10)
      this.middleBarOpacity = this.middleBarOpacity || new Animated.Value(0)
    }

    this.containerAnim = this.containerAnim || new Animated.Value(0)
    this.bottomBar = this.bottomBar || new Animated.Value(0)
    this.bottomBarMargin = this.bottomBarMargin || new Animated.Value(4)
    this.middleBarOpacity = this.middleBarOpacity || new Animated.Value(1)
    this.topBar = this.topBar || new Animated.Value(0)
    this.topBarMargin = this.topBarMargin || new Animated.Value(0)
    this.marginLeft = this.marginLeft || new Animated.Value(0)
    this.width = this.width || new Animated.Value(25)

    const styles = {
      container: {
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        transform: [
          {
            rotate: this.containerAnim.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '360deg']
            })
          }
        ]
      },
      topBar: {
        height: 3,
        width: this.width,
        marginLeft: this.marginLeft,
        marginBottom: this.topBarMargin,
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
        width: this.width,
        marginLeft: this.marginLeft,
        marginTop: this.bottomBarMargin,
        backgroundColor: 'black',
        transform: [
          {
            rotate: this.bottomBar.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '50deg']
            })
          }
        ]
      }
    }

    return (
      <TouchableOpacity style={style} onPress={this.animate}>
        <Animated.View style={styles.container}>
          <Animated.View style={styles.topBar} />
          <Animated.View style={styles.middleBar} />
          <Animated.View style={styles.bottomBar} />
        </Animated.View>
      </TouchableOpacity>
    )
  }
}
