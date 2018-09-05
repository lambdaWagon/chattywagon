import React from 'react'
import { SafeAreaView, Text, View, ScrollView, Dimensions, Platform } from 'react-native'

import styles from '../../styles'

const { height, width } = Dimensions.get('window')

class Rides extends React.Component {
  state = {
    rides: [
      {
        timestamp: '09-19-17',
        start: '1514 Rome St',
        end: '1515 Rome St',
        distance: 0.01,
        travelTime: '30sec'
      },
      {
        timestamp: '01-01-18',
        start: '200 Walker St',
        end: '1399 Mission Lane',
        distance: 3,
        travelTime: '5min'
      },
      {
        timestamp: '03-19-18',
        start: '1514 Rome St',
        end: '1515 Rome St',
        distance: 0.01,
        travelTime: '30sec'
      },
      {
        timestamp: '03-19-48',
        start: '1514 Rome St',
        end: '1515 Rome St',
        distance: 0.01,
        travelTime: '30sec'
      },
      {
        timestamp: '03-19-38',
        start: '1514 Rome St',
        end: '1515 Rome St',
        distance: 0.01,
        travelTime: '30sec'
      },
      {
        timestamp: '03-19-68',
        start: '1514 Rome St',
        end: '1515 Rome St',
        distance: 0.01,
        travelTime: '30sec'
      },
      {
        timestamp: '09-19-57',
        start: '1514 Rome St',
        end: '1515 Rome St',
        distance: 0.01,
        travelTime: '30sec'
      }
    ]
  }

  render() {
    return (
      <SafeAreaView style={styles.rideViewContainer}>
        <ScrollView>
          {this.state.rides.map(ride => {
            return (
              <View style={styles.rideContainer} key={ride.timestamp}>
                <Text
                  style={
                    Platform.OS === 'ios' && (height === 812 || width === 812)
                      ? { fontSize: 10, marginBottom: 10 }
                      : styles.textMargin
                  }
                >
                  Date: {ride.timestamp}
                </Text>
                <Text
                  style={
                    Platform.OS === 'ios' && (height === 812 || width === 812)
                      ? { fontSize: 10 }
                      : null
                  }
                >
                  Start: {ride.start}
                </Text>
                <Text
                  style={
                    Platform.OS === 'ios' && (height === 812 || width === 812)
                      ? styles.textMarginX
                      : styles.textMargin
                  }
                >
                  End: {ride.end}
                </Text>
                <View style={styles.bottomText}>
                  <Text
                    style={
                      Platform.OS === 'ios' && (height === 812 || width === 812)
                        ? { fontSize: 10 }
                        : null
                    }
                  >
                    Miles: {ride.distance}
                  </Text>
                  <Text
                    style={
                      Platform.OS === 'ios' && (height === 812 || width === 812)
                        ? { fontSize: 10 }
                        : null
                    }
                  >
                    Time: {ride.travelTime}
                  </Text>
                </View>
              </View>
            )
          })}
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default Rides
