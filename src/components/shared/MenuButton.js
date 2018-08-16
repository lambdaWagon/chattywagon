import React, { Component } from 'react'
import { Animated, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

export default class MenuButton extends Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
    style: PropTypes.number.isRequired,
    navigate: PropTypes.func.isRequired,
    type: PropTypes.string
  }

  static defaultProps = { type: null }

  state = { active: false }

  componentWillReceiveProps({ type }) {
    if (type === 'arrow') {
      this.setState(p => ({ active: !p.active }))
      this.arrow()
    }
  }

  cross = () => {
    if (this.state.active) {
      this.setState(p => ({ active: !p.active }))

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

  arrow = () => {
    if (this.state.active) {
      this.setState(p => ({ active: !p.active }))

      Animated.spring(this.bottomBar, { toValue: 1 }).start()
      Animated.spring(this.bottomBarMargin, { toValue: 2.5 }).start()
      Animated.spring(this.topBar, { toValue: 1 }).start()
      Animated.spring(this.topBarMargin, { toValue: -2.5 }).start()
      Animated.spring(this.width, { toValue: 14 }).start()
      Animated.spring(this.marginLeft, { toValue: -14.75 }).start()
    } else {
      Animated.spring(this.bottomBar, { toValue: 0 }).start()
      Animated.spring(this.bottomBarMargin, { toValue: 4 }).start()
      Animated.spring(this.topBar, { toValue: 0 }).start()
      Animated.spring(this.topBarMargin, { toValue: 0 }).start()
      Animated.spring(this.width, { toValue: 25 }).start()
      Animated.spring(this.marginLeft, { toValue: 0 }).start()
    }
  }

  animate = () => {
    const {
      props: { navigate, type }
    } = this
    this.setState(p => ({ active: !p.active }))

    switch (type) {
      case 'arrow':
        this.arrow()
        navigate()
        break
      default:
        this.cross()
        navigate()
        break
    }
  }

  render() {
    const {
      props: { color, style, type }
    } = this

    if (this.state.active) {
      if (type === 'cross') {
        this.topBar = this.topBar || new Animated.Value(0.9)
        this.bottomBar = this.bottomBar || new Animated.Value(0.9)
        this.bottomBarMargin = this.bottomBarMargin || new Animated.Value(-10)
        this.middleBarOpacity = this.middleBarOpacity || new Animated.Value(0)
      }
    } else if (type === 'arrow') {
      this.topBar = this.topBar || new Animated.Value(1)
      this.topBarMargin = this.topBarMargin || new Animated.Value(-2)
      this.bottomBar = this.bottomBar || new Animated.Value(1)
      this.bottomBarMargin = this.bottomBarMargin || new Animated.Value(2)
      this.width = this.width || new Animated.Value(14)
      this.marginLeft = this.marginLeft || new Animated.Value(-13)
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
        backgroundColor: color,
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
        backgroundColor: color,
        marginTop: 4
      },
      bottomBar: {
        height: 3,
        width: this.width,
        marginLeft: this.marginLeft,
        marginTop: this.bottomBarMargin,
        backgroundColor: color,
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
