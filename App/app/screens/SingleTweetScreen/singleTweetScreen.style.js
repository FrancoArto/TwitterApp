import { StyleSheet, Dimensions } from 'react-native';
import globalStyle from '../../global.style';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export default StyleSheet.create({
    activityIndicatorContainer: {
        backgroundColor: globalStyle.colors.container,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },

    flexTweet: {
        flex: 1,
        flexDirection: 'column',

        backgroundColor: globalStyle.colors.container
    },


    flexHead: {
        flex: 0.2,
        flexDirection: 'row',

        borderWidth: 0,
        paddingTop: globalStyle.spacings.XS,
    },
    retweeted: {
        color: globalStyle.colors.retweeted
    },

    flexUserImg: {
        flex: 0.3,
        flexDirection: 'column',
        justifyContent: 'flex-start',

        width: width / 6,
        padding: globalStyle.spacings.XS
    },

    flexTitleColumn: {
        flex: 0.5,
        flexDirection: 'column',
        justifyContent: 'flex-start',

        width: (width * 3) / 4,
        padding: globalStyle.spacings.XS,
        marginRight: globalStyle.spacings.XXL,
        marginTop: globalStyle.spacings.XS
    },
    flexTitle: {
        alignSelf: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },


    flexContent: {
        flexDirection: 'row',

        borderWidth: 0,
        paddingHorizontal: globalStyle.spacings.S,
        marginHorizontal: globalStyle.spacings.S,
    },


    flexIcons: {
        flex: 0.2,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        height: height / 6,

        paddingTop: globalStyle.spacings.XS,
    },

    fontUserName: {
        fontSize: globalStyle.fontSizes.L,
        fontWeight: 'bold',
        color: globalStyle.colors.titleText
    },
    fontCountNameAndTime: {
        fontSize: globalStyle.fontSizes.M,
        color: globalStyle.colors.secondaryText
    },
    fontMainContent: {
        fontSize: globalStyle.fontSizes.M,
        color: globalStyle.colors.mainContentText
    },
    fontNumberIcons: {
        fontSize: globalStyle.fontSizes.M,
        color: globalStyle.colors.mainContentText
    },

    sizeIcons: {
        marginHorizontal: globalStyle.spacings.S,

        fontSize: globalStyle.fontSizes.XL,
        color: globalStyle.colors.mainContentText
    },
    buttonIcons: {
        flex: 1,
        flexDirection: 'column-reverse',
        alignSelf: 'center',
    },


    flexImage: {
        flex: 0.5,
        flexDirection: 'row',
        marginTop: globalStyle.spacings.M,
        paddingBottom: globalStyle.spacings.XS,
        justifyContent: 'center'
    },
    imageTweet: {
        marginTop: globalStyle.spacings.XS,
        borderRadius: 20,       
        height: '90%',
        flex: 0.98,
    },
    linkStyle: {
        color: globalStyle.colors.link,
    }
});
