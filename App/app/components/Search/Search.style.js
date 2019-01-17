import { StyleSheet } from 'react-native';
import globalStyle from '../../global.style';

const styles = StyleSheet.create({
    container: {
      flex: 0.15,
      flexDirection: 'row',
    },

    input: {
      width: '70%',
      height: '80%',
      borderColor: globalStyle.colors.rowBorder,
      borderTopWidth: 0.5,
      borderBottomWidth: 0.5,
      borderLeftWidth: 0.5,
      borderRightWidth: 0.5,
      marginTop: globalStyle.spacings.XS,
      marginLeft: globalStyle.spacings.S,
      paddingLeft: globalStyle.spacings.XS
    },
    searchIcon: {
      color: globalStyle.colors.searchIcon
    },
    resetIcon: {
      color: globalStyle.colors.resetIcon
    },
    searchButton: {
      width:'30%',
      justifyContent: 'center',
      height: '80%',
      marginTop: globalStyle.spacings.XS,
      paddingRight: globalStyle.spacings.M,
    },

    hideBottomBorder: {
      borderBottomWidth: 0
    },

    searchButtonText: {
      color: globalStyle.colors.buttonText,
      textAlign: 'center',
      marginHorizontal: globalStyle.spacings.L
    }
});

export default styles;