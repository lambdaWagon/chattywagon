import React, { Component } from 'react'
import { Animated, Image, Modal, Text, View } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import moment from 'moment'
import PropTypes from 'prop-types'

import * as actions from '../../actions'
import Button from '../shared/Button'
import { Car, Time } from '../shared/icons'
import { deviceCheck } from '../../styles'
import styles from '../../styles'

const marker = require('../../../assets/marker4.png')

class ConfirmRide extends Component {
  value = new Animated.Value(0)

  translateY = new Animated.Value(0)

  currentTime = new Date()

  componentDidMount() {
    Animated.stagger(500, [
      Animated.spring(this.translateY, { toValue: 1, useNativeDriver: true }).start(),
      Animated.timing(this.value, { toValue: 1, duration: 1000, useNativeDriver: true }).start()
    ])
  }

  render() {
    const moveValue = this.value.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -300]
    })
    const moveY = this.translateY.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -300]
    })
    const style = {
      vue: {
        bottom: -300,
        transform: [{ translateY: moveValue }]
      },
      view: {
        bottom: -300,
        transform: [{ translateY: moveY }],
        position: 'absolute'
      },
      line: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        opacity: 0.1,
        width: '100%'
      },
      verticalLine: {
        borderLeftColor: '#e8863c',
        borderLeftWidth: 3,
        marginLeft: 6,
        opacity: 0.9,
        height: 45,
        top: deviceCheck(82.5, 71),
        height: deviceCheck('40%', '38%'),
        position: 'absolute'
      },
      location: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
      },
      text: {
        marginLeft: 10,
        width: 263,
        fontSize: deviceCheck(10, null)
      },
      time: {
        marginLeft: 10,
        fontFamily: 'mono',
        fontSize: deviceCheck(10, null)
      },
      marker: {
        width: 15,
        height: 15
      }
    }
    const {
      confirmModal,
      currentLocation,
      destination,
      destinationSet,
      distance,
      duration,
      pickupLocation,
      pickupLocationSet
    } = this.props
    return (
      <Modal animationType="slide" transparent visible={confirmModal}>
        <View pointerEvents="box-none" style={styles.mapUI}>
          <Animated.View style={[styles.mapUIContainer, style.vue]}>
            <View style={styles.confirmDetails}>
              <View style={styles.confirmRow}>
                <Car />
                <Text style={styles.confirmText}>{Math.round(duration)} mi.</Text>
                <Time />
                <Text style={styles.confirmText}>{Math.round(distance)} min.</Text>
              </View>
              <View style={style.line} />
              <View style={style.location}>
                <Image source={marker} style={style.marker} />
                <View>
                  <Text style={style.text} numberOfLines={1} ellipsizeMode="tail">
                    {pickupLocationSet
                      ? pickupLocation.structured_formatting.main_text
                      : currentLocation.address}
                  </Text>
                  <Text style={style.time}>{moment(this.currentTime).format('h:mm a')}</Text>
                </View>
              </View>
              <View style={style.verticalLine} />
              <View style={style.location}>
                <Image source={marker} style={style.marker} />
                <View>
                  <Text style={style.text} numberOfLines={1} ellipsizeMode="tail">
                    {destinationSet && destination.structured_formatting.main_text}
                  </Text>
                  <Text style={style.time}>
                    {moment(this.currentTime)
                      .add(duration, 'minutes')
                      .format('h:mm a')}
                  </Text>
                </View>
              </View>
            </View>
          </Animated.View>
          <Animated.View style={style.view}>
            <Button style={{ marginBottom: 50 }} navigate={() => console.log('Confirmed')}>
              CONFIRM RIDE
            </Button>
          </Animated.View>
        </View>
      </Modal>
    )
  }
}

ConfirmRide.defaultProps = {
  distance: null,
  duration: null
}

ConfirmRide.propTypes = {
  confirmModal: PropTypes.bool.isRequired,
  currentLocation: PropTypes.object.isRequired,
  destination: PropTypes.object.isRequired,
  destinationSet: PropTypes.bool.isRequired,
  distance: PropTypes.number,
  duration: PropTypes.number,
  pickupLocation: PropTypes.object.isRequired,
  pickupLocationSet: PropTypes.bool.isRequired
}

export default connect(
  ({
    geolocation: {
      currentLocation,
      destination,
      destinationSet,
      directions: { distance, duration },
      pickupLocation,
      pickupLocationSet
    },
    ui: { confirmModal }
  }) => ({
    confirmModal,
    currentLocation,
    destination,
    destinationSet,
    distance,
    duration,
    pickupLocation,
    pickupLocationSet
  }),
  dispatch => bindActionCreators(actions, dispatch)
)(ConfirmRide)
