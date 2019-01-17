import { StyleSheet } from 'react-native';
import globalStyle from '../../global.style';


const styles = StyleSheet.create({
  activityIndicatorContainer:{
      alignItems: 'center',
      justifyContent: 'center',
      flex: 0.85,
  },

  container: {
    flex: 0.85,
    paddingLeft: 10,
  },

  row:{
      borderBottomWidth: 1,
      borderColor: globalStyle.colors.rowBorder,
      padding: globalStyle.spacings.S
  },

  title:{
      fontSize: globalStyle.fontSizes.M,
      fontWeight: "600"
  },

  description:{
      marginTop: globalStyle.spacings.XS,
      fontSize: globalStyle.fontSizes.S,
  }
});

export default styles;