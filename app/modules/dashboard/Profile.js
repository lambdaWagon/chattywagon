import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  SafeAreaView,
  Image
} from 'react-native'
import { LinearGradient } from 'expo'
import Icon from 'react-native-vector-icons/FontAwesome'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

import avatarPlaceholder from '../../../assets/avatarplaceholder.png'
import genstyles from '../../styles'
// import styles from '../../styles'

class Profile extends React.Component {
  state = {
    username: 'John Huggett',
    number: '(777) 777-7777',
    email: 'fake@fake.com',
    avatarImg: avatarPlaceholder,
    display: true
  }

  phoneNumberFormatter = n => {
    const num = n.replace(/[^0-9]/g, '')
    if (num.length >= 8) {
      return `(${num.substr(0, 3)}) ${num.substr(3, 3)}-${num.substr(6)}`
    }
    if (num.length >= 3 && num.length < 8) {
      return `${num.substr(0, 3)}-${num.substr(3)}`
    }
    return num
  }

  handleInput = i => {
    const number = this.phoneNumberFormatter(i)
    this.setState({ number })
  }

  render() {
    const styles = StyleSheet.create({
      avatarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: hp('5%')
      },

      image: {
        height: 200,
        width: 200,
        borderRadius: 100,
        marginBottom: hp('1.5%')
      },
      imageWithKeyboard: {
        width: 115,
        height: 115,
        borderRadius: 55,
        marginBottom: hp('1%')
      },
      inputContainer: {
        flexDirection: 'row'
      },
      input: {
        borderBottomWidth: 2,
        paddingBottom: hp('.5%'),
        marginRight: wp('1%'),
        width: wp('70%')
      },
      text: {
        marginBottom: hp('3%')
      },
      buttonContainer: {
        width: wp('50%'),
        height: hp('7%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#c4f4ff',
        backgroundColor: 'rgba(0, 0, 0, .65)'
      }
    })
    return (
      <KeyboardAvoidingView
        enabled
        behavior="padding"
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
        keyboardVerticalOffset={Platform.OS === 'ios' ? -150 : 0}
      >
        <LinearGradient
          colors={['#c4f4ff', '#c4f4ff', '#e8863c', '#e8863c']}
          style={genstyles.gradient}
        >
          <SafeAreaView style={genstyles.rideViewContainer}>
            <View style={styles.avatarContainer}>
              <Image
                style={this.state.display ? styles.avatarContainer : styles.imageWithKeyboard}
                source={this.state.avatarImg}
              />
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ marginRight: wp('3%') }}>edit</Text>
                <TouchableOpacity>
                  <Icon style={styles.socialIcons} name="pencil" size={wp('4%')} color="black" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                onChangeText={username => this.setState({ username })}
                style={styles.input}
                value={this.state.username}
                onFocus={() => this.setState({ display: false })}
                onBlur={() => this.setState({ display: true })}
              />

              <Icon style={styles.socialIcons} name="pencil" size={wp('4%')} color="black" />
            </View>
            <Text style={styles.text}>name</Text>
            <View style={styles.inputContainer}>
              <TextInput
                onChangeText={this.handleInput}
                style={styles.input}
                value={this.state.number}
                maxLength={14}
                onFocus={() => this.setState({ display: false })}
                onBlur={() => this.setState({ display: true })}
              />
              <Icon style={styles.socialIcons} name="pencil" size={wp('4%')} color="black" />
            </View>
            <Text style={styles.text}>phone number</Text>

            <View style={styles.inputContainer}>
              <TextInput
                onChangeText={email => this.setState({ email })}
                style={styles.input}
                value={this.state.email}
                onFocus={() => this.setState({ display: false })}
                onBlur={() => this.setState({ display: true })}
              />
              <Icon style={styles.socialIcons} name="pencil" size={wp('4%')} color="black" />
            </View>
            <Text style={styles.text}>email</Text>

            <View style={{ alignItems: 'center' }}>
              <TouchableOpacity
                shadowColor="black"
                shadowOffset={{ width: 10, height: 10 }}
                style={styles.buttonContainer}
              >
                <Text style={{ color: 'white' }}>Delete Account</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </LinearGradient>
      </KeyboardAvoidingView>
    )
  }
}

export default Profile
