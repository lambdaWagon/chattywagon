import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native'
import { LinearGradient } from 'expo'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

import genStyles from '../../styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: hp('100%'),
    alignItems: 'center',
    top: hp('15%')
  },
  icon: {
    marginLeft: wp('3%')
  },
  RideContainer: {
    borderWidth: 1,
    backgroundColor: 'rgba(211, 211, 211, 0.3)',
    padding: wp('3%'),
    borderRadius: 7,
    width: wp('80%'),
    marginBottom: hp('1%')
  },
  textMargin: {
    marginBottom: hp('2%')
  },
  bottomText: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

class Rides extends React.Component {
  static navigationOptions = () => ({
    headerTintColor: 'grey',
    headerStyle: {
      backgroundColor: 'lightGrey'
    }
  })

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
        timestamp: '03-19-28',
        start: '1514 Rome St',
        end: '1515 Rome St',
        distance: 0.01,
        travelTime: '30sec'
      },
      {
        timestamp: '03-19-08',
        start: '1514 Rome St',
        end: '1515 Rome St',
        distance: 0.01,
        travelTime: '30sec'
      }
    ]
  }

  render() {
    return (
      <LinearGradient
        colors={['#c4f4ff', '#c4f4ff', '#e8863c', '#e8863c']}
        style={genStyles.gradient}
      >
        <SafeAreaView style={styles.container}>
          <ScrollView>
            {this.state.rides.map(ride => {
              return (
                <View style={styles.RideContainer} key={ride.timestamp}>
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
        </SafeAreaView>
      </LinearGradient>
    )
  }
}

export default Rides
