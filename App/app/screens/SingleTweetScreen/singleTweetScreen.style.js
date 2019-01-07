import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export default StyleSheet.create({
    activityIndicatorContainer: {
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },

    flexTweet: {
        flex: 1,
        flexDirection: 'column',

        backgroundColor: '#f4f4f4'
    },


    flexHead: {
        flex: 0.5,
        flexDirection: 'row',

        borderWidth: 0,
        paddingTop: width / 60,
        paddingBottom: 0,
        margin: 0
    },

    flexUserImg: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',

        width: width / 4,
        padding: width / 60
    },

    flexTitleColumn: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',

        width: (width * 3) / 4,
        padding: width / 60,
        marginRight: width / 3,
        marginTop: width / 60
    },
    flexTitle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',

        padding: 0,
        margin: 0
    },


    flexContent: {
        flex: 0.6,
        flexDirection: 'row',

        borderWidth: 0,
        paddingRight: width / 60,
        marginRight: width / 60,
        paddingLeft: width / 60,
        marginLeft: width / 60,
        marginBottom: 0,
        paddingBottom: 0,
        marginTop: 0,
        paddingTop: 0
    },


    flexIcons: {
        flex: 0.5,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        height: height / 6,

        marginLeft: 0,
        marginRight: 0,
        paddingLeft: 0,
        paddingRight: 0,

        paddingTop: width / 80,
        margin: 0
    },

    fontUserName: {
        fontSize: width / 20,
        fontWeight: 'bold',
        color: '#040404'
    },
    fontCountNameAndTime: {
        fontSize: width / 26,
        color: '#5D5D5D'
    },
    fontMainContent: {
        fontSize: width / 20,
        color: '#5D5D5D'
    },
    fontNumberIcons: {
        fontSize: width / 18,
        color: '#5D5D5D'
    },

    sizeIcons: {
        marginLeft: width / 80,
        marginRight: width / 80,

        fontSize: width / 10,
        color: "#909090"
    },
    buttonIcons: {
        flex: 1,
        flexDirection: 'column-reverse',
        alignSelf: 'center',

        margin: 0,
        padding: 0
    },


    flexImage: {
        flex: 1,
        flexDirection: 'row',

        marginTop: 0,
        paddingTop: 0,
        paddingBottom: width / 80,
        justifyContent: 'center'
    },
    imageTweet: {
        marginBottom: 0,
        paddingBottom: 0,
        marginTop: '2%',
        paddingTop: 0,
        borderRadius: 20,       
        height: '90%',
        flex: 0.98,
    },
    linkStyle: {
        color: '#2980b9',
    }
});
