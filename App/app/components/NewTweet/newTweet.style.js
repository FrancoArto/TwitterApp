import { StyleSheet, Dimensions } from 'react-native'
import globalStyle from '../../global.style';

var { width, height } = Dimensions.get('window');


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyle.colors.container,
    paddingHorizontal: globalStyle.spacings.XS,
    justifyContent: 'center'
  },
  closeButton: {
    width: height / 18,
    height: height / 18,
    backgroundColor: globalStyle.colors.iconBackground,
    position: 'absolute',
    top: globalStyle.spacings.S,
    left: globalStyle.spacings.M,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    borderWidth: 1,
  },
  closeIcon: {
    color: globalStyle.colors.searchIcon,
    fontSize: globalStyle.fontSizes.XL
  },
  buttonText: {
    color: globalStyle.colors.buttonText,
  },
  sendButton: {
    width: height / 10,
    height: height / 16,
    marginTop: globalStyle.spacings.XS,
    backgroundColor: globalStyle.colors.mainButtons,
    justifyContent: 'center',
    alignSelf: 'flex-end'
  }
})