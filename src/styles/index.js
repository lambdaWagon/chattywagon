import { Dimensions, StyleSheet } from 'react-native'

const { height, width } = Dimensions.get('window')

const primaryColor = '#e8863c'
const inactiveColor = '#e5e5e5'
const textShadowColor = 'rgba(0, 0, 0, 0.15)'

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
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginTop: 25,
    marginBottom: 25,
    opacity: 0.1
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
    color: primaryColor,
    padding: 15,
    textShadowColor,
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

  /* Auth */
  authContainer: {
    backgroundColor: 'white',
    width: 294,
    padding: 25,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    shadowColor: 'black',
    shadowOpacity: 0.35,
    shadowRadius: 25,
    shadowOffset: { width: 0, height: 15 }
  },
  socialButton: {
    justifyContent: 'center',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0
  },
  authButton: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  inputHeader: {
    fontFamily: 'black',
    fontSize: 10,
    letterSpacing: 1.5,
    marginBottom: 10
  },
  inputText: {
    fontFamily: 'black',
    fontSize: 20,
    letterSpacing: 1.5,
    width: '100%'
  },
  inputFooter: {
    marginTop: 15,
    fontSize: 10,
    letterSpacing: 1
  },
  footerButton: {
    marginTop: 20,
    width: 294
  },
  footerText: {
    fontFamily: 'black',
    textAlign: 'center',
    fontSize: 10,
    letterSpacing: 1.5
  },
  underline: {
    fontSize: 20,
    color: inactiveColor,
    top: 66,
    left: 25,
    position: 'absolute',
    letterSpacing: 13,
    zIndex: 1
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
    justifyContent: 'flex-end',
    height,
    width
  }
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
