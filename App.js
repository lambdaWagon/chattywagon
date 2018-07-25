import React from 'react';
import { createStackNavigator } from 'react-navigation';

import { Map } from './app/modules/map';
import { Login, SplashScreen } from './app/modules/auth';

export default () => <StackNavigator />;

const StackNavigator = createStackNavigator({
  SplashScreen,
  Login,
  Map,
});
