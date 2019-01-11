import { StyleSheet, Dimensions } from 'react-native'

var { width, height } = Dimensions.get('window');


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 5
  },
  closeButton: {
    width: height / 18,
    height: height / 18,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: height / 40,
    left: width / 35,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    marginTop: height/10,
    borderWidth: 1,
  },
  buttonText: {
    color: 'white',
  },
  sendButton: {
    width: height / 10,
    height: height / 16,
    marginTop: 5,
    backgroundColor: '#1DA1F2',
    justifyContent: 'center',
    alignSelf: 'flex-end'
  }
})