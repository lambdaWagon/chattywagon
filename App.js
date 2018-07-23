import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { database } from './src/config/firebase';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class App extends Component {
  state = {};

  componentDidMount() {
    database
      .ref('drivers')
      .once('value')
      .then(snapshot => {
        this.setState({ driver: snapshot.val() });
      });
  }

  render() {
    console.log(this.state);
    return (
      <View style={styles.container}>
        <Text>Hello!</Text>
      </View>
    );
  }
}
