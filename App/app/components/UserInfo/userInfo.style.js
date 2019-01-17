import { StyleSheet,Dimensions } from 'react-native';
import globalStyle from '../../global.style';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        borderBottomColor: globalStyle.colors.rowBorder,
        borderBottomWidth: 0.5,
        backgroundColor: globalStyle.colors.container
    },
    bannerContainer:{
        flex: 22
    },
    banner:{
        width: width,
        height:height/4.5
    },
    userLogoAndNameContainer:{
        flex:20,
        flexDirection:'row',
        marginLeft: globalStyle.spacings.S
    },
    userImage: {
        borderColor: globalStyle.colors.container,
        borderWidth: 3
        
    },
    userName:{
        fontSize: globalStyle.fontSizes.L,
        fontWeight: 'bold',
        color: globalStyle.colors.titleText
    },
    userDispayedName:{
        color: globalStyle.colors.secondaryText
    },
    userNameAndHash:{
        marginLeft:globalStyle.spacings.S,
        marginTop: globalStyle.spacings.M      
    },
    desciptionView:{
        marginTop: globalStyle.spacings.XS
    },
    userDescriptionContainer:{
        flex:35,
        marginLeft: globalStyle.spacings.S
    },
    userInfo:{
        flex:22
    },
    tweets:{
        flex:9
    },
    userStats:{
        flexDirection:'row',
        marginTop: globalStyle.spacings.XS        
    },
    desciption:{
        fontSize: globalStyle.fontSizes.M,
        fontWeight:'400',
        color: globalStyle.colors.secondaryText
    },
    statsColor:{
        color: globalStyle.colors.secondaryText,
        fontSize: globalStyle.fontSizes.M
    },
    iconStyle: {
        fontSize: globalStyle.fontSizes.L
    }

})