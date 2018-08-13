import React, { Fragment } from 'react';
import { Animated, Easing, Image, View, StyleSheet } from 'react-native';
import {
  DrawerItems,
  createStackNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';

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

const style = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    paddingTop: 75,
    backgroundColor: '#ff8200',
  },
  drawerView: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerImage: { height: 100, width: 100 },
});

export default () => <RootNavigation />;

const Dashboard = props => (
  <View style={style.drawerContainer}>
    <View style={style.drawerView}>
      <Image style={style.drawerImage} source={require('./avatarplaceholder.png')} />
    </View>
    <DrawerItems {...props} />
  </View>
);

const DrawerNavigation = createDrawerNavigator(
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
    contentComponent: Dashboard,
    contentOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'white',
    },
    drawerType: 'push-screen',
  },
);

const DrawerWrapper = ({ navigation }) => (
  <Fragment>
    <Icon
      name="bars"
      size={wp('7.5%')}
      color="black"
      style={{ position: 'absolute', marginLeft: wp('7%'), marginTop: hp('5%'), zIndex: 999 }}
      onPress={() => navigation.toggleDrawer()}
    />
    <DrawerNavigation navigation={navigation} />
  </Fragment>
);

DrawerWrapper.router = DrawerNavigation.router;

const StackNavigator = createSwitchNavigator({
  Home,
  PhoneInput,
  CodeInput,
  SocialAccount,
  SocialLogin,
});

const RootNavigation = createStackNavigator(
  {
    auth: StackNavigator,
    main: DrawerWrapper,
  },
  {
    headerMode: 'none',
    mode: 'modal',
    navigationOptions: {
      gesturesEnabled: false,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const height = layout.initHeight;
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

        return { opacity, transform: [{ translateY }] };
      },
    }),
  },
);

console.ignoredYellowBox = ['Remote debugger'];
