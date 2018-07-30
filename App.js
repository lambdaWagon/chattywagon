import React from 'react';
import { createStackNavigator } from 'react-navigation';

import Home from './app/modules/login/getRide';
import PhoneInput from './app/modules/login/phoneInput';
import SocialAccount from './app/modules/login/socialAccount';
import SocialLogin from './app/modules/login/socialLogin';

export default class App extends React.Component {
  state = {};

  render() {
    return <StackNavigator />;
  }
}

const StackNavigator = createStackNavigator({
  Home,
  PhoneInput,
  SocialAccount,
  SocialLogin,
});

/*
// import Alert from 'react-native';
// import Expo from 'expo';
// import { database, config, auth } from './app/config/firebase';
// import { auth } from './app/config/firebase';
// import { provider } from './app/config/firebase';
// import Map from './app/modules/map';
// import { View, Text } from 'react-native';

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

auth.signInWithPopup(provider).then(results => {
  this.setState({fbToken: results.credential.accessToken, user: results.user})
});

const options = {
  permissions: ['public_profile'],
  behavior: 'web',
};

// token and type come from Expo func // also login window from FB
const { token, type } = await Expo.Facebook.logInWithReadPermissionsAsync(
  config.fbAppId,
  options,
);

if (type === 'success') {
  // if success grab token send to FB
  const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);

  // greats the users after FB login
  Alert.alert('Logged In', `Hi ${(await response.json()).name}`);

  // give credential from Firebase
  const credential = auth.FacebookAuthProvider.credential(token);
  // TODO: find out what todo maybe redirect
  auth.signInAndRetrieveDataWithCredential(credential).then(res => console.log(res));
}
*/
