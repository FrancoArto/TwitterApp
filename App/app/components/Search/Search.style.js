import { StyleSheet } from 'react-native';
import GlobalStyles from '../../global.style'

const styles = StyleSheet.create({
    container: {
      flex: 0.15,
      flexDirection: 'row',
    },

    input: {
      width: '70%',
      height: '80%',
      borderColor: GlobalStyles.colors.rowBorder,
      borderTopWidth: 0.5,
      borderBottomWidth: 0.5,
      borderLeftWidth: 0.5,
      borderRightWidth: 0.5,
      marginTop: GlobalStyles.spacings.XS,
      marginLeft: GlobalStyles.spacings.S,
      paddingLeft: GlobalStyles.spacings.XS
    },

    searchButton: {
      width:'30%',
      justifyContent: 'center',
      height: '80%',
      marginTop: GlobalStyles.spacings.XS,
      paddingRight: GlobalStyles.spacings.M,
    },

    hideBottomBorder: {
      borderBottomWidth: 0
    },

    searchButtonText: {
      color: GlobalStyles.colors.buttonText,
      textAlign: 'center',
      marginHorizontal: GlobalStyles.spacings.L
    }
});

export default styles;