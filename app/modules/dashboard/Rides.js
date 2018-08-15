import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native'
import { LinearGradient } from 'expo'

import styles from '../../styles'

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
      }
    ]
  }

  render() {
    return (
      <LinearGradient colors={['#c4f4ff', '#c4f4ff', '#e8863c', '#e8863c']} style={styles.gradient}>
        <View style={styles.rideViewContainer}>
          <ScrollView>
            {this.state.rides.map(ride => {
              return (
                <View style={styles.rideContainer} key={ride.timestamp}>
                  <Text style={styles.textMargin}>Date: {ride.timestamp}</Text>
                  <Text>Start: {ride.start}</Text>
                  <Text style={styles.textMargin}>End: {ride.end}</Text>
                  <View style={styles.bottomText}>
                    <Text>Miles: {ride.distance}</Text>
                    <Text>Time: {ride.travelTime}</Text>
                  </View>
                </View>
              )
            })}
          </ScrollView>
        </View>
      </LinearGradient>
    )
  }
}

export default Rides
