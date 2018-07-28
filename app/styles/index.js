import { Dimensions, StyleSheet } from 'react-native'

const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width

export default StyleSheet.create({
  /* General */
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  gradient: {
    height: screenHeight,
    width: screenWidth
  },

  /* Map */
  map: {
    flex: 1,
    backgroundColor: '#fff',
    height: screenHeight
  },

  /* Login */
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },

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
  searchBar: {
    flex: 1,
    flexDirection: 'column',
    position: 'absolute',
    zIndex: 999,
    left: 15,
    height: 40
  },
  searchInput: {
    backgroundColor: 'white',
    padding: 10,
    opacity: 0.9,
    top: screenHeight - 360
  }
})
