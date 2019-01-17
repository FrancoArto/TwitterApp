import {StyleSheet} from 'react-native'
import globalStyle from '../../global.style';

const styles = StyleSheet.create({
  activityIndicatorContainer: {
    backgroundColor: globalStyle.colors.container,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  container: {
    backgroundColor: globalStyle.colors.container,
    flex: 1,
  }
});

export default styles