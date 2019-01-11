import { StyleSheet, Dimensions } from 'react-native'

var {width, height} = Dimensions.get('window');


export const styles = StyleSheet.create({
  floatingButton: {
    width: height/12,
    height: height/12,
    borderRadius: 30,
    backgroundColor: '#1DA1F2',
    position: 'absolute',
    bottom: height/20,
    right: width/18,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: height/35
  }
})