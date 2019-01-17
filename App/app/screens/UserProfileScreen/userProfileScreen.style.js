import { StyleSheet,Dimensions } from 'react-native';
import globalStyle from '../../global.style';

export const styles = StyleSheet.create({
    activityIndicatorContainer:{
        backgroundColor: globalStyle.colors.container,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    mainContainer: {
        flex:1,
    backgroundColor: globalStyle.colors.container

    },
    userData: {
        flex: 65
    },
    tweetsZone:{
        flex: 35
    }
});