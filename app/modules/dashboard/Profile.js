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
    avatarImg: avatarPlaceholder
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
        borderWidth: 1,
        width: wp('50%'),
        height: hp('7%'),
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7
      }
    })
    return (
      <LinearGradient
        colors={['#c4f4ff', '#c4f4ff', '#e8863c', '#e8863c']}
        style={genstyles.gradient}
      >
        <KeyboardAvoidingView
          enabled
          style={genstyles.rideViewContainer}
          behavior="padding" // {Platform.OS === 'ios' ? 'padding' : null}
        >
          <SafeAreaView>
            <View style={styles.avatarContainer}>
              <Image style={styles.image} source={this.state.avatarImg} />
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
              />
              <Icon style={styles.socialIcons} name="pencil" size={wp('4%')} color="black" />
            </View>
            <Text style={styles.text}>phone number</Text>

            <View style={styles.inputContainer}>
              <TextInput
                onChangeText={email => this.setState({ email })}
                style={styles.input}
                value={this.state.email}
              />
              <Icon style={styles.socialIcons} name="pencil" size={wp('4%')} color="black" />
            </View>
            <Text style={styles.text}>email</Text>

            <View style={{ alignItems: 'center' }}>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Delete Account</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </KeyboardAvoidingView>
      </LinearGradient>
    )
  }
}

export default Profile
