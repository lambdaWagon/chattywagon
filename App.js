import React from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator, NavigationActions } from 'react-navigation';

import store from './app/redux';
import { Map } from './app/modules/map';
import { Login, SplashScreen } from './app/modules/auth';
import { auth } from './app/config/firebase';

let navigator;

auth.onAuthStateChanged(user => {
  if (user) navigator.dispatch(NavigationActions.navigate('Map'));
});

export default () => (
  <Provider store={store}>
    <StackNavigator ref={ref => (navigator = ref)} />
  </Provider>
);

const StackNavigator = createStackNavigator({
  SplashScreen,
  Login,
  Map,
});
