import { StyleSheet, Dimensions } from 'react-native'
import GlobalStyles from '../../global.style'

var { width, height } = Dimensions.get('window');


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.container,
    paddingHorizontal: GlobalStyles.spacings.XS,
    justifyContent: 'center'
  },
  closeButton: {
    width: height / 18,
    height: height / 18,
    backgroundColor: GlobalStyles.colors.iconBackground,
    position: 'absolute',
    top: GlobalStyles.spacings.S,
    left: GlobalStyles.spacings.M,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    borderWidth: 1,
  },
  buttonText: {
    color: GlobalStyles.colors.buttonText,
  },
  sendButton: {
    width: height / 10,
    height: height / 16,
    marginTop: GlobalStyles.spacings.XS,
    backgroundColor: GlobalStyles.colors.mainButtons,
    justifyContent: 'center',
    alignSelf: 'flex-end'
  }
})