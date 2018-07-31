import React from 'react';
import { createStackNavigator } from 'react-navigation';

import Home from './app/modules/login/getRide';
import PhoneInput from './app/modules/login/phoneInput';
import SocialAccount from './app/modules/login/socialAccount';
import SocialLogin from './app/modules/login/socialLogin';
import CodeInput from './app/modules/login/codeInput';
import Map from './app/modules/map';

export default class App extends React.Component {
  state = {};

  render() {
    return <StackNavigator />;
  }
}

const StackNavigator = createStackNavigator({
  Home,
  PhoneInput,
  CodeInput,
  SocialAccount,
  SocialLogin,
  Map,
});
