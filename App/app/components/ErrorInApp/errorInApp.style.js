import { StyleSheet } from 'react-native';
import GlobalStyles from '../../global.style'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: GlobalStyles.colors.errorBox
    },
    errorMessage:{
        color: GlobalStyles.colors.buttonText,
        fontWeight:'bold'
    },
    errorContainer:{
        marginLeft: GlobalStyles.spacings.S
    }

});

export default styles;