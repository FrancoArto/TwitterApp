import { StyleSheet } from 'react-native';
import globalStyle from '../../global.style';

const styles = StyleSheet.create({
  title:{
      fontSize: globalStyle.fontSizes.M,
      fontWeight: "600",
      color: globalStyle.colors.titleText
  },

  tweets:{
      marginTop: globalStyle.spacings.XS,
      fontSize: globalStyle.fontSizes.S,
      color: globalStyle.colors.secondaryText
  }
});

export default styles;