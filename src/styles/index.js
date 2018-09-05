import { Dimensions, StyleSheet, Platform } from 'react-native'

const { height, width } = Dimensions.get('window')

const primaryColor = '#e8863c'
const inactiveColor = '#e5e5e5'
const textShadowColor = 'rgba(0, 0, 0, 0.15)'

export const deviceCheck = (a, b) =>
  Platform.OS === 'ios' && (height === 812 || width === 812) ? a : b

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
  menuButton: {
    position: 'absolute',
    marginLeft: 20,
    marginTop: 40,
    zIndex: 999
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
    fontSize: deviceCheck(23, 48),
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
    fontSize: deviceCheck(6, 10),
    letterSpacing: 1.5,
    marginBottom: 10
  },
  inputText: {
    fontFamily: 'black',
    fontSize: deviceCheck(10, 20),
    letterSpacing: 1.5,
    width: '100%'
  },
  inputFooter: {
    marginTop: 15,
    fontSize: deviceCheck(5, 10),
    letterSpacing: 1
  },
  footerButton: {
    marginTop: 20,
    width: 294
  },
  footerText: {
    fontFamily: 'black',
    textAlign: 'center',
    fontSize: deviceCheck(4.75, 10),
    letterSpacing: 1.5
  },
  underline: {
    fontSize: deviceCheck(9, 20),
    color: inactiveColor,
    top: 66,
    left: 25,
    position: 'absolute',
    letterSpacing: 13,
    zIndex: 1
  },
  socialInput: {
    fontSize: deviceCheck(8, null)
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
  },
  mapUIContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '45%',
    width: '98%',
    backgroundColor: 'white',
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    shadowColor: 'black',
    shadowOpacity: 0.35,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 0 }
  },
  confirmText: {
    fontSize: 24,
    fontFamily: 'mono',
    color: primaryColor
  },
  confirmDetails: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 25,
    position: 'absolute',
    width: 294
  },
  confirmRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },

  /* Map Marker Labels */
  markerContainer: {
    alignItems: 'center',
    paddingHorizontal: 4.5
  },
  bubble: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 0,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    borderRadius: 2,
    shadowColor: 'black',
    shadowOpacity: 0.35,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 4 }
  },
  markerImage: {
    width: 15,
    height: 15,
    marginTop: 5
  },
  markerText: {
    lineHeight: 15,
    paddingTop: 4,
    paddingBottom: 3,
    paddingHorizontal: 10,
    fontSize: deviceCheck(10, null)
  },
  timeContainer: {
    flex: -1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 2,
    paddingBottom: 5,
    paddingHorizontal: 5,
    maxWidth: 100,
    minHeight: 30,
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2,
    backgroundColor: 'black'
  },
  timeText: {
    fontFamily: 'mono',
    fontSize: deviceCheck(10, 16),
    color: 'white'
  },
  minText: {
    fontSize: deviceCheck(8, 10),
    color: 'white',
    letterSpacing: 1,
    marginTop: -3
  },

  /* Current Location */
  currentLocation: {
    width: 50,
    height: 50,
    marginTop: 8
  },
  currentLocAnim: {
    width: 50,
    height: 50,
    zIndex: 3
  },
  currentLocMarker: {
    left: 9.5,
    top: -8,
    width: 31,
    height: 35,
    zIndex: 4,
    position: 'absolute'
  },

  /* Profile */
  profileContainer: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    top: 85,
    marginBottom: 30
  },
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 100,
    marginBottom: 10
  },
  imageWithKeyboard: {
    width: deviceCheck(150, 100),
    height: deviceCheck(150, 100),
    borderRadius: deviceCheck(75, 50),
    marginBottom: 10
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  editTouch: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: deviceCheck(20, 30)
  },
  editText: {
    marginRight: 10,
    fontSize: deviceCheck(10, 0)
  },
  input: {
    borderBottomWidth: 2,
    paddingBottom: 5,
    marginRight: 10,
    width: '70%',
    fontSize: deviceCheck(10, 15)
  },
  socialIcons: {
    alignItems: 'center'
  },
  text: {
    marginBottom: 15,
    fontSize: deviceCheck(10, 15)
  },
  buttonContainer: {
    width: deviceCheck(250, 200),
    height: deviceCheck(75, 50),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#c4f4ff',
    backgroundColor: 'rgba(0, 0, 0, .65)',
    marginTop: deviceCheck(40, 10)
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
  description: { fontSize: deviceCheck(8, null) },
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
    fontSize: deviceCheck(12, 16),
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 4 },
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
    fontSize: deviceCheck(12, 16),
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 4 },
    width: width - 20
  }
}

export const customProps = {
  text: { style: { fontFamily: 'book' } },
  textInput: { style: { fontFamily: 'book' } }
}
