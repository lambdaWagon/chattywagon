import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity
} from 'react-native'
import { LinearGradient } from 'expo'

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

import genstyles from '../../styles'
// import styles from '../../styles'

class Contact extends React.Component {
  state = {
    title: '',
    text: '',
    contacts: []
  }

  handleSubmit = () => {
    const contacts = [...this.state.contacts, { title: this.state.title, text: this.state.text }]

    this.setState({ contacts, title: '', text: '' })
  }

  render() {
    console.log('here', this.state)
    const styles = StyleSheet.create({
      titleContainer: {
        width: wp('80%'),
        marginBottom: hp('5%')
      },
      text: {
        fontSize: hp('2%'),
        marginBottom: hp('2%')
      },
      titleInput: {
        backgroundColor: 'rgba(255,255,255, 0.3)',
        borderRadius: 7,
        height: hp('5%'),
        paddingLeft: wp('5%'),
        paddingRight: wp('5%'),
        borderWidth: 1
      },
      textInput: {
        backgroundColor: 'rgba(255,255,255, 0.3)',
        borderRadius: 7,
        paddingLeft: wp('5%'),
        paddingRight: wp('5%'),
        paddingTop: wp('5%'),
        borderWidth: 1,
        height: hp('20%')
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
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
        >
          <View style={styles.titleContainer}>
            <Text style={styles.text}>Title</Text>
            <TextInput
              style={styles.titleInput}
              keyboardType="default"
              type="text"
              onChangeText={title => this.setState({ title })}
              name="text"
              value={this.state.title}
            />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.text}>Text</Text>
            <TextInput
              style={styles.textInput}
              keyboardType="default"
              type="text"
              multiline={true}
              numberOfLines={10}
              onChangeText={text => this.setState({ text })}
              name="text"
              value={this.state.text}
            />
          </View>
          <TouchableOpacity onPress={this.handleSubmit} style={styles.buttonContainer}>
            <Text>Submit</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </LinearGradient>
    )
  }
}

export default Contact
