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
  Image,
  Dimensions
} from 'react-native'
import { LinearGradient } from 'expo'
import Icon from 'react-native-vector-icons/FontAwesome'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

import avatarPlaceholder from '../../../assets/avatarplaceholder.png'
import genstyles from '../../styles'

const { height, width } = Dimensions.get('window')

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
      profileContainer: {
        flex: 1,
        height: hp('100%'),
        alignItems: 'center',
        top: hp('15%'),
        marginBottom: hp('20%')
      },
      profileContainerX: {
        flex: 1,
        height: hp('100%'),
        alignItems: 'center',
        top: hp('10%')
      },
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
        flexDirection: 'row',
        alignItems: 'center'
      },
      input: {
        borderBottomWidth: 2,
        paddingBottom: hp('.5%'),
        marginRight: wp('1%'),
        width: wp('70%')
      },
      inputX: {
        borderBottomWidth: 2,
        marginRight: wp('1%'),
        width: wp('70%'),
        fontSize: wp('3%')
      },
      socialIcons: {
        alignItems: 'center'
      },
      text: {
        marginBottom: hp('3%')
      },
      textX: {
        marginBottom: hp('1.5%'),
        fontSize: wp('3')
      },
      buttonContainer: {
        width: wp('50%'),
        height: hp('7%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#c4f4ff',
        backgroundColor: 'rgba(0, 0, 0, .65)'
      },
      buttonContainerX: {
        width: wp('60%'),
        height: hp('7%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#c4f4ff',
        backgroundColor: 'rgba(0, 0, 0, .65)',
        marginTop: hp('2%')
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
        keyboardVerticalOffset={
          Platform.OS === 'ios' && (height === 812 || width === 812) ? -232 : -58
        }
      >
        <LinearGradient
          colors={['#c4f4ff', '#c4f4ff', '#e8863c', '#e8863c']}
          style={genstyles.gradient}
        >
          <SafeAreaView
            style={
              Platform.OS === 'ios' && (height === 812 || width === 812)
                ? styles.profileContainerX
                : styles.profileContainer
            }
          >
            <View style={styles.avatarContainer}>
              <Image
                style={this.state.display ? styles.image : styles.imageWithKeyboard}
                source={this.state.avatarImg}
              />
              <View style={styles.inputContainer}>
                <Text
                  style={
                    Platform.OS === 'ios' && (height === 812 || width === 812)
                      ? { marginRight: wp('3%'), fontSize: wp('3%') }
                      : { marginRight: wp('3%') }
                  }
                >
                  edit
                </Text>
                <TouchableOpacity>
                  <Icon name="pencil" size={wp('4%')} color="black" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={
                  Platform.OS === 'ios' && (height === 812 || width === 812)
                    ? styles.inputX
                    : styles.input
                }
                onChangeText={username => this.setState({ username })}
                value={this.state.username}
                onFocus={() => this.setState({ display: false })}
                onBlur={() => this.setState({ display: true })}
              />

              <Icon name="pencil" size={wp('4%')} color="black" />
            </View>
            <Text
              style={
                Platform.OS === 'ios' && (height === 812 || width === 812)
                  ? styles.textX
                  : styles.text
              }
            >
              name
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                onChangeText={this.handleInput}
                style={
                  Platform.OS === 'ios' && (height === 812 || width === 812)
                    ? styles.inputX
                    : styles.input
                }
                value={this.state.number}
                maxLength={14}
                onFocus={() => this.setState({ display: false })}
                onBlur={() => this.setState({ display: true })}
              />
              <Icon name="pencil" size={wp('4%')} color="black" />
            </View>
            <Text
              style={
                Platform.OS === 'ios' && (height === 812 || width === 812)
                  ? styles.textX
                  : styles.text
              }
            >
              phone number
            </Text>

            <View style={styles.inputContainer}>
              <TextInput
                onChangeText={email => this.setState({ email })}
                style={
                  Platform.OS === 'ios' && (height === 812 || width === 812)
                    ? styles.inputX
                    : styles.input
                }
                value={this.state.email}
                onFocus={() => this.setState({ display: false })}
                onBlur={() => this.setState({ display: true })}
              />
              <Icon name="pencil" size={wp('4%')} color="black" />
            </View>
            <Text
              style={
                Platform.OS === 'ios' && (height === 812 || width === 812)
                  ? styles.textX
                  : styles.text
              }
            >
              email
            </Text>

            <View style={{ alignItems: 'center' }}>
              <TouchableOpacity
                shadowColor="black"
                shadowOffset={{ width: 10, height: 10 }}
                style={
                  Platform.OS === 'ios' && (height === 812 || width === 812)
                    ? styles.buttonContainerX
                    : styles.buttonContainer
                }
              >
                <Text
                  style={
                    Platform.OS === 'ios' && (height === 812 || width === 812)
                      ? { color: 'white', fontSize: wp('2.5%') }
                      : { color: 'white' }
                  }
                >
                  Delete Account
                </Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </LinearGradient>
      </KeyboardAvoidingView>
    )
  }
}

export default Profile
