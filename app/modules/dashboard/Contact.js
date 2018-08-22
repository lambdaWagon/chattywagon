import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Alert,
  SafeAreaView
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
    if (!this.state.title.length || !this.state.text.length) {
      return Alert.alert('Please fill out both title and text fields before submitting')
    }

    const contacts = [...this.state.contacts, { title: this.state.title, text: this.state.text }]
    this.setState({ contacts, title: '', text: '' })
  }

  render() {
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
        height: hp('5%'),
        paddingLeft: wp('5%'),
        paddingRight: wp('5%'),
        borderWidth: 1
      },
      textInput: {
        backgroundColor: 'rgba(255,255,255, 0.3)',
        paddingLeft: wp('5%'),
        paddingRight: wp('5%'),
        paddingTop: wp('5%'),
        borderWidth: 1,
        height: hp('20%')
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
      <LinearGradient
        colors={['#c4f4ff', '#c4f4ff', '#e8863c', '#e8863c']}
        style={genstyles.gradient}
      >
        <KeyboardAvoidingView
          enabled
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          keyboardVerticalOffset={Platform.OS === 'ios' ? -60 : 0}
        >
          <SafeAreaView style={styles.titleContainer}>
            <Text style={styles.text}>Title</Text>
            <TextInput
              style={styles.titleInput}
              keyboardType="default"
              type="text"
              value={this.state.title}
              onChangeText={title => this.setState({ title })} // may need to refactor for performance
              returnKeyType="next"
              onSubmitEditing={() => this.titleInput.focus()}
            />
          </SafeAreaView>
          <View style={styles.titleContainer}>
            <Text style={styles.text}>Text</Text>
            <TextInput
              style={styles.textInput}
              keyboardType="default"
              type="text"
              value={this.state.text}
              multiline={true}
              numberOfLines={10}
              onChangeText={text => this.setState({ text })}
              ref={input => (this.titleInput = input)}
            />
          </View>
          <TouchableOpacity onPress={this.handleSubmit} style={styles.buttonContainer}>
            <Text style={{ color: 'white' }}>Submit</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </LinearGradient>
    )
  }
}

export default Contact
