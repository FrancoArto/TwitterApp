import { StyleSheet, Dimensions } from 'react-native'
import GlobalStyles from '../../global.style'

var {width, height} = Dimensions.get('window');


export const styles = StyleSheet.create({
  floatingButton: {
    width: height/12,
    height: height/12,
    borderRadius: 30,
    backgroundColor: GlobalStyles.colors.mainButtons,
    position: 'absolute',
    bottom: GlobalStyles.spacings.S,
    right: GlobalStyles.spacings.M,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: GlobalStyles.colors.buttonText,
    fontSize: GlobalStyles.fontSizes.M
  }
})