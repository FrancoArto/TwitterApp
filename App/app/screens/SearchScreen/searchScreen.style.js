import { StyleSheet } from 'react-native';
import globalStyle from '../../global.style';

const styles = StyleSheet.create({
  activityIndicatorContainer:{
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
  },

  container: {
    flex:1, 
    paddingTop: globalStyle.spacings.S,
    paddingHorizontal: globalStyle.spacings.XS,
    backgroundColor: globalStyle.colors.container,
  }
});

export default styles;