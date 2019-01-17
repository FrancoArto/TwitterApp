import {StyleSheet, Dimensions} from 'react-native'
import globalStyle from '../../global.style';

var {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: globalStyle.colors.iconBackground
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: globalStyle.colors.iconBackground,
    borderRadius: 5,
    padding: globalStyle.spacings.M,
    paddingHorizontal: globalStyle.spacings.L,
    alignSelf: 'center',
  },
  rotate: {
    flex: 0,
    backgroundColor: globalStyle.colors.iconBackground,
    borderRadius: 5,
    paddingHorizontal: globalStyle.spacings.XS,
    alignSelf: 'center',
  },
  cameraBottom: {
    flex: 0.15, 
    flexDirection: 'row', 
    justifyContent: 'space-around',
    backgroundColor: globalStyle.colors.cameraBottom
  },
  showImage: {
    flex: 0.85,
    height: height,
    width: width
  },
  actionButtons: {
    flex: 0,
    backgroundColor: globalStyle.colors.iconBackground,
    borderRadius: 5,
    paddingHorizontal: globalStyle.spacings.XS,
    alignSelf: 'center',
    margin: globalStyle.spacings.XL,
  },
  cameraIcons: {
    color: globalStyle.colors.cameraIcon,
    fontSize: globalStyle.fontSizes.XXL
  }
});