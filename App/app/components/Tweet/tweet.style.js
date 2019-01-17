import { StyleSheet, Dimensions } from 'react-native';
import globalStyle from '../../global.style';

const width = Dimensions.get('window').width;


export default StyleSheet.create({

    flexTweet: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: globalStyle.colors.container,

        borderBottomWidth: 1,
        borderColor: globalStyle.colors.rowBorder,
    },


    flexUserImg: {
        flex: 0.9,
        flexDirection: 'column',
        justifyContent: 'flex-start',

        padding: globalStyle.spacings.S, 
    },


    flexRightSide: {
        flex: 6.8,
        flexDirection: 'column',
        justifyContent: 'flex-start',

        paddingRight: globalStyle.spacings.S, 
    },

    flexTitle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',

        paddingVertical:  globalStyle.spacings.XS, 
    },
    flexContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    flexIcons: {
        flex: 1,
        flexDirection: 'row',

        paddingVertical: globalStyle.spacings.XS, 
        marginRight: globalStyle.spacings.S
    },

    fontUserName: {
        fontSize: globalStyle.fontSizes.M,
        fontWeight: 'bold',
        color: globalStyle.colors.titleText
    },
    fontCountNameAndTime: {
        fontSize: globalStyle.fontSizes.S,
        color: globalStyle.colors.secondaryText
    },
    fontMainContent: {
        fontSize: globalStyle.fontSizes.M,
        color: globalStyle.colors.mainContentText
    },
    fontNumberIcons: {
        fontSize: globalStyle.fontSizes.M,
        color: globalStyle.colors.mainContentText,

        marginRight: globalStyle.spacings.S
    },
    retweeted: {
        color: globalStyle.colors.retweeted
    },

    sizeIcons: {
        fontSize: globalStyle.fontSizes.M,
        color: globalStyle.colors.tweetIcons
    },
    buttonIcons: {
        marginHorizontal: globalStyle.spacings.M,
    },
    

    flexImage: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'center',

        paddingVertical: globalStyle.spacings.XS, 
    },
    imageTweet: {
        flex: 1,
        flexDirection: 'row',

        borderRadius: 20,
        height: width/3
        
    },
    extraMarginWhitImg: {
        marginRight: globalStyle.spacings.M
    }
  });
  