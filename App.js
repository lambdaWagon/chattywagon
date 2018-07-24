import React from 'react';
import { createStackNavigator } from 'react-navigation';

import { Map } from './app/modules/map';
import { Login } from './app/modules/auth/';

export default () => <StackNavigator />;

const StackNavigator = createStackNavigator({
  Login,
  Map,
});
