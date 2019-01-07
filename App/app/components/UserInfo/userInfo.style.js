import { StyleSheet,Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        borderBottomColor:'#AAA',
        borderBottomWidth:0.5,
        backgroundColor:'white'
    },
    bannerContainer:{
        flex:22
    },
    banner:{
        width: width,
        height:height/4.5
    },
    userLogoAndNameContainer:{
        flex:20,
        flexDirection:'row',
        marginLeft: width/65
    },
    userImage: {
        borderColor: 'white',
        borderWidth: 3
        
    },
    userName:{
        fontSize: width/18,
        fontWeight: 'bold'
    },
    userDispayedName:{
        color: '#9c9c9c'
    },
    userNameAndHash:{
        marginLeft:width/22,
        marginTop:width/10      
    },
    desciptionView:{
        marginTop:width/55
    },
    userDescriptionContainer:{
        flex:35,
        marginLeft:width/30
    },
    userInfo:{
        flex:22
    },
    tweets:{
        flex:9
    },
    userStats:{
        flexDirection:'row',
        marginTop:5        
    },
    desciption:{
        fontSize:width/26,
        fontWeight:'400',
        color: '#5D5D5D'
    },
    statsColor:{
        color: '#989898',
        fontSize:width/28
    },
    iconStyle: {
        fontSize: 20
    }

})