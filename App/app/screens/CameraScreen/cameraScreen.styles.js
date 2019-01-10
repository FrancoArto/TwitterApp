import {StyleSheet, Dimensions} from 'react-native'

var {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: 'transparent',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
  },
  rotate: {
    flex: 0,
    backgroundColor: 'transparent',
    borderRadius: 5,
    paddingHorizontal: 5,
    alignSelf: 'center',
  },
  cameraBottom: {
    flex: 0.15, 
    flexDirection: 'row', 
    justifyContent: 'space-around',
    backgroundColor: 'black'
  },
  showImage: {
    flex: 0.85,
    height: height,
    width: width
  },
  cancel: {
    flex: 0,
    backgroundColor: 'transparent',
    borderRadius: 5,
    paddingHorizontal: 5,
    alignSelf: 'center',
    margin: width/10,
  },
  accept: {
    flex: 0,
    backgroundColor: 'transparent',
    borderRadius: 5,
    paddingHorizontal: 5,
    alignSelf: 'center',
    margin: width/10,
  }
});