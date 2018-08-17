import { Dimensions, StyleSheet } from 'react-native'

const { height, width } = Dimensions.get('window')

export default StyleSheet.create({
  /* General */
  container: {
    flex: 1
  },
  containerCentered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  gradient: {
    height,
    width
  },
  arrow: {
    height: 10
  },

  /* Splashscreen */
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  logo: {
    top: 190,
    fontFamily: 'logo',
    fontSize: 48,
    color: '#e8863c',
    padding: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.15)',
    textShadowOffset: {
      width: -2,
      height: 4
    },
    textShadowRadius: 0.5
  },
  splashButtonContainer: {
    height: '30%',
    alignItems: 'center'
  },

  /* Map */
  map: {
    flex: 1,
    left: 0,
    top: 0,
    right: width,
    bottom: height
  },
  mapUI: {
    position: 'absolute',
    alignItems: 'center',
    height,
    width
  }

  // /* Login */
  // loginContainer: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center'
  // },
  // title: {
  //   color: '#AAADBA',
  //   marginTop: 10,
  //   width: 180,
  //   textAlign: 'center',
  //   opacity: 0.9
  // },

  // /* LoginForm */
  // formContainer: {
  //   padding: 20
  // },
  // input: {
  //   height: 40,
  //   backgroundColor: 'rgba(255,130, 0,0.2)',
  //   marginBottom: 10,
  //   color: 'black',
  //   paddingHorizontal: 10,
  //   textAlign: 'center',
  //   width: 300,
  //   borderRadius: 50,
  //   borderWidth: 2,
  //   borderColor: '#ffcd99'
  // },

  // buttonContainer: {
  //   marginBottom: 30,
  //   borderRadius: 50,
  //   height: 40,
  //   backgroundColor: 'rgba(255,130, 0,0.2)',
  //   borderWidth: 2,
  //   borderColor: '#ffcd99'
  // },

  // buttonText: {
  //   justifyContent: 'center',
  //   textAlign: 'center',
  //   fontWeight: '800'
  // },

  // /* SearchBar */
  // searchContainer: {
  //   flex: 1,
  //   justifyContent: 'flex-start',
  //   alignItems: 'center'
  // },
  // searchBar: {
  //   flex: 1,
  //   opacity: 0.1
  // }
})

export const searchDestStyle = {
  container: {
    backgroundColor: 'rgba(0,0,0,0)',
    paddingTop: 133,
    alignSelf: 'center',
    position: 'absolute',
    top: 0
  },
  listView: { top: 4 },
  textInputContainer: {
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    width: width - 20
  },
  textInput: {
    marginLeft: 0,
    marginRight: 0,
    height: 40,
    color: '#5d5d5d',
    fontSize: 16,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 10, height: 10 },
    width: width - 20
  }
}

export const searchPickupStyle = {
  container: {
    backgroundColor: 'white',
    paddingTop: 92
  },
  listView: { top: 45 },
  textInputContainer: {
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    width: width - 20
  },
  textInput: {
    marginLeft: 0,
    marginRight: 0,
    height: 40,
    color: '#5d5d5d',
    fontSize: 16,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 10, height: 10 },
    width: width - 20
  }
}

export const customProps = {
  text: { style: { fontFamily: 'book' } },
  textInput: { style: { fontFamily: 'book' } }
}
