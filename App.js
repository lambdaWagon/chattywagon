import React from 'react';
import {
  createStackNavigator,
  createDrawerNavigator,
  DrawerItems,
  createSwitchNavigator,
} from 'react-navigation';
import { View, SafeAreaView, ScrollView, Image } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Home from './app/modules/login/getRide';
import PhoneInput from './app/modules/login/phoneInput';
import SocialAccount from './app/modules/login/socialAccount';
import SocialLogin from './app/modules/login/socialLogin';
import CodeInput from './app/modules/login/codeInput';
import Map from './app/modules/map/map';
import Settings from './app/modules/settings/userSettings';
import Payment from './app/modules/settings/payment';
import Promos from './app/modules/settings/promos';
import Help from './app/modules/settings/help';
import Profile from './app/modules/settings/profile';
import Rides from './app/modules/settings/rides';

const CustomDrawComponent = props => (
  <View style={{ backgroundColor: '#ff8200', height: hp('100%'), flex: 1 }}>
    <SafeAreaView style={{ height: hp('100%'), flex: 1 }}>
      <View
        style={{
          height: 150,
          backgroundColor: '#ff8200',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          source={require('./avatarplaceholder.png')}
          style={{ height: 100, width: 100, borderRadius: 50 }}
        />
      </View>
      <ScrollView style={{ height: hp('100%'), backgroundColor: '#ff8200' }}>
        <DrawerItems style={{ backgroundColor: '#ff8200' }} {...props} />
      </ScrollView>
    </SafeAreaView>
  </View>
);

export default class App extends React.Component {
  state = {};

  render() {
    return <RootNavigation />;
  }
}

const DrawerNavigator = createDrawerNavigator(
  {
    Map,
    Rides,
    Profile,
    Payment,
    Promos,
    Help,
    Settings,
  },
  {
    initialRouteName: 'Map',
    contentComponent: CustomDrawComponent,
    contentOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'white',
    },
  },
);

const StackNavigator = createStackNavigator({
  Home,
  PhoneInput,
  CodeInput,
  SocialAccount,
  SocialLogin,
});

const RootNavigation = createSwitchNavigator({
  auth: StackNavigator,
  main: DrawerNavigator,
});
