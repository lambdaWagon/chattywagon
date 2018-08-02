import React from 'react'
import { KeyboardAvoidingView, TextInput, View } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withFormik } from 'formik'

import * as Actions from '../../actions'
import styles from '../../styles'

const InnerForm = ({ values, handleChange, handleSubmit }) => (
  <TextInput
    placeholder="Where to?"
    style={styles.searchInput}
    onSubmitEditing={handleSubmit}
    returnKeyType="search"
    onChangeText={handleChange('destination')}
    value={values.destination}
  />
)

const Search = ({ setAddress }) => {
  const Form = withFormik({
    mapPropsToValues: () => ({ destination: '' }),
    handleSubmit: values => setAddress(values.destination)
  })(InnerForm)

  return (
    <KeyboardAvoidingView
      pointerEvents="none"
      keyboardVerticalOffset={-100}
      style={styles.searchContainer}
      behavior="padding"
      enabled
    >
      <View style={styles.searchBuffer} />
      <Form />
    </KeyboardAvoidingView>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(Search)
