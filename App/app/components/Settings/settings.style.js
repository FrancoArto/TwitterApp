import { StyleSheet } from 'react-native';
import globalStyle from '../../global.style';

const styles = StyleSheet.create({
    card:{
      backgroundColor: globalStyle.colors.cardBackground
    },
    
    cardText: {
      fontWeight: '800',
      color: globalStyle.colors.buttonText
    }
});

export default styles;