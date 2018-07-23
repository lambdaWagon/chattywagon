import React from 'react';
import Alert from 'react-native';
import Expo from 'expo';

import { database, config, auth } from './app/config/firebase';
// import { auth } from './app/config/firebase';
// import { provider } from './app/config/firebase';

import Map from './app/modules/map';

export default class App extends React.Component {
  state = {
    drivers: null,
    fbToken: null,
    user: null,
  };

  async componentDidMount() {
    database
      .ref('drivers')
      .once('value')
      .then(snapshot => {
        this.setState({ drivers: snapshot.val() });
      });

    // auth.signInWithPopup(provider).then(results => {
    //   this.setState({fbToken: results.credential.accessToken, user: results.user})
    // });
    const options = {
      permissions: ['public_profile'],
      behavior: 'web',
    };

    const { token, type } = await Expo.Facebook.logInWithReadPermissionsAsync(
      config.fbAppId,
      options,
    ); // token and type come from Expo func // also login window from FB

    if (type === 'success') {
      // if success grab token send to FB
      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
      Alert.alert('Logged In', `Hi ${(await response.json()).name}`);
      const credential = auth.FacebookAuthProvider.credential(token); // give credential from Firebase
      auth.signInAndRetrieveDataWithCredential(credential).then(res => console.log(res)); // TODO: find out what todo maybe redirect
    }
  }

  render() {
    console.log(this.state);
    return <Map />;
  }
}
