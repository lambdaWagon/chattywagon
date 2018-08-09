import { Dimensions, StyleSheet } from 'react-native'

const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width

export default StyleSheet.create({
  /* General */
  container: {
    flex: 1
  },
  gradient: {
    height: screenHeight,
    width: screenWidth
  },
  arrow: {
    height: 10
  },

  /* Splashscreen */
  logoContainer: {
    flexGrow: 1,
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

  /* Map */
  map: {
    flex: 1,
    backgroundColor: '#fff',
    height: screenHeight
  },

  /* Login */
  title: {
    color: '#AAADBA',
    marginTop: 10,
    width: 180,
    textAlign: 'center',
    opacity: 0.9
  },

  /* LoginForm */
  formContainer: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,130, 0,0.2)',
    marginBottom: 10,
    color: 'black',
    paddingHorizontal: 10,
    textAlign: 'center',
    width: 300,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#ffcd99'
  },

  buttonContainer: {
    marginBottom: 30,
    borderRadius: 50,
    height: 40,
    backgroundColor: 'rgba(255,130, 0,0.2)',
    borderWidth: 2,
    borderColor: '#ffcd99'
  },

  buttonText: {
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: '800'
  },

  /* SearchBar */
  searchContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  searchBar: {
    flex: 1,
    opacity: 0.1
  },
  searchInput: {
    alignSelf: 'center',
    zIndex: 999,
    backgroundColor: 'white',
    borderRadius: 5,
    fontSize: 16,
    padding: 10,
    height: 40,
    top: 100,
    width: screenWidth - 20,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 10, height: 10 }
  },
  searchInputFocus: {
    backgroundColor: 'red',
    padding: 10,
    opacity: 0.95,
    top: screenHeight - 750
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
    width: screenWidth - 20
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
    width: screenWidth - 20
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
    width: screenWidth - 20
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
    width: screenWidth - 20
  }
}

export const customProps = {
  text: { style: { fontFamily: 'book' } },
  textInput: { style: { fontFamily: 'book' } }
}
