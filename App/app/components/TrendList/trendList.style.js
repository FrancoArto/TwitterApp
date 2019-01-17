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
    paddingHorizontal: globalStyle.spacings.S
  },

  row:{
      borderBottomWidth: 1,
      borderColor: globalStyle.colors.rowBorder,
      padding: globalStyle.spacings.S
  }
});

export default styles;