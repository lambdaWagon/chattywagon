import React, { Component } from 'react';
import { Button, ImageBackground, View } from 'react-native';
import { LinearGradient } from 'expo';
import PropTypes from 'prop-types';

import { auth } from '../../config/firebase';
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

  // componentDidMount() {
  //   const {
  //     navigation: { navigate },
  //   } = this.props;
  //   auth.onAuthStateChanged(user => {
  //     if (user) navigate('Map');
  //   });
  // }

  render() {
    const {
      navigation: { navigate },
    } = this.props;
    return (
      <ImageBackground
        source={require('../../../assets/splash.png')}
        style={{ width: '100%', height: '100%' }}
      >
        <LinearGradient
          colors={[
            'rgba(196,244,255,0.8)',
            'rgba(196,244,255,0.8)',
            'rgba(232,134,60,0.8)',
            'rgba(232,134,60,0.8)',
          ]}
          style={styles.gradient}
        >
          <View style={styles.logoContainer}>
            <Button title="Get Started →" onPress={() => navigate('Login')} />
          </View>
        </LinearGradient>
      </ImageBackground>
    );
  }
}
