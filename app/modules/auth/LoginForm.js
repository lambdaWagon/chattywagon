import React, { Component } from 'react';
import { Button, StatusBar, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from '../../styles';

export default class LoginForm extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    email: '',
    password: '',
  };

  render() {
    const { email, password } = this.state;
    const {
      navigation: { navigate },
    } = this.props;
    return (
      <View style={styles.formContainer}>
        <StatusBar barStyle="light-content" />
        <TextInput
          style={styles.input}
          placeholder="username or email"
          placeholderTextColor="rgb(219,220,226)"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          value={email}
          onChangeText={text => this.setState({ email: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="password"
          placeholderTextColor="rgb(219,220,226)"
          returnKeyType="go"
          secureTextEntry
          ref={input => (this.passwordInput = input)}
          onSubmitEditing={() => navigate('Map')}
          value={password}
          onChangeText={text => this.setState({ password: text })}
        />
        <View style={styles.buttonContainer}>
          <Button style={styles.buttonText} title="Login" onPress={() => navigate('Map')} />
        </View>
      </View>
    );
  }
}
