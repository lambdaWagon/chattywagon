import React from 'react'
import { Dimensions, Text, TouchableOpacity, View } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import * as actions from '../../actions'
import styles from '../../styles'
import { SearchIcon } from '../shared/icons'

const hitSlop = { top: 20, bottom: 20, left: 20, right: 20 }

const style = {
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    borderRadius: 2,
    height: 40,
    width: Dimensions.get('window').width - 20,
    paddingLeft: 10,
    marginBottom: 100,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 4 }
  },
  buttonText: {
    fontSize: 16,
    padding: 10
  }
}

const SearchButton = ({ destinationSet, showSearch }) =>
  destinationSet ? null : (
    <View pointerEvents="box-none" style={styles.mapUI}>
      <TouchableOpacity
        hitSlop={hitSlop}
        style={style.button}
        activeOpacity={0.9}
        onPress={showSearch}
      >
        <SearchIcon />
        <Text style={style.buttonText}>Where to?</Text>
      </TouchableOpacity>
    </View>
  )

SearchButton.propTypes = {
  destinationSet: PropTypes.bool.isRequired,
  showSearch: PropTypes.func.isRequired
}

export default connect(
  ({ geolocation: { destinationSet } }) => ({ destinationSet }),
  dispatch => bindActionCreators(actions, dispatch)
)(SearchButton)
