import React, { Component } from 'react';
import { Alert, Button, KeyboardAvoidingView, View } from 'react-native';
import Expo, { LinearGradient } from 'expo';
import * as firebase from 'firebase';
import PropTypes from 'prop-types';

import LoginForm from './LoginForm';
import { database, config, auth } from '../../config/firebase';
import styles from '../../styles';

export default class Login extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.props.navigation.navigate('Map');
      }
    });
  }

  signInWithFB = async () => {
    const options = {
      permissions: ['public_profile', 'email'],
      behavior: 'web',
    };

    try {
      const { token, type } = await Expo.Facebook.logInWithReadPermissionsAsync(
        config.fbAppId,
        options,
      );

      if (type === 'success') {
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        Alert.alert('Logged In', `Hi ${(await response.json()).name}`);
        const credential = await firebase.auth.FacebookAuthProvider.credential(token);
        const signedIn = await auth.signInWithCredential(credential);
        const { uid } = auth.currentUser;

        // We can pull user info from Facebook's API using token
        database
          .ref('users')
          .child(uid)
          .set({
            userId: uid,
          });
        console.log('👉 signedIn', signedIn);
        return signedIn;
      }
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { navigation } = this.props;
    return (
      <LinearGradient
        colors={['#c4f4ff', '#c4f4ff', '#e8863c', '#e8863c']}
        style={{
          padding: 15,
          alignItems: 'center',
          borderRadius: 5,
          height: '100%',
        }}
      >
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <View style={styles.logoContainer}>
            <Button title="Facebook Login" onPress={this.signInWithFB} />
            <Button title="Facebook Logout" onPress={() => auth.signOut()} />
          </View>
          <View>
            <LoginForm navigation={navigation} />
          </View>
        </KeyboardAvoidingView>
      </LinearGradient>
    );
  }
}
