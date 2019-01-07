import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;


export default StyleSheet.create({

    flexTweet: {
        flex: 1,
        flexDirection: 'row',

        borderBottomWidth: 1,
        borderColor: '#D5D5D5',
    },


    flexUserImg: {
        flex: 0.9,
        flexDirection: 'column',
        justifyContent: 'flex-start',

        padding: width/60, 
    },


    flexRightSide: {
        flex: 6.8,
        flexDirection: 'column',
        justifyContent: 'flex-start',

        paddingLeft: 0,
        marginLeft: 0,
        paddingRight: width/40, 
    },

    flexTitle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',

        paddingTop:  width/60, 
        paddingBottom: width/60, 
    },
    flexContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    flexIcons: {
        flex: 1,
        flexDirection: 'row',

        marginLeft: 0,
        paddingLeft: 0,

        paddingTop: width/80, 
        paddingBottom: width/80, 
        marginRight: width/50
    },

    fontUserName: {
        fontSize: width/24,
        fontWeight: 'bold',
        color: '#040404'
    },
    fontCountNameAndTime: {
        fontSize: width/24,
        color: '#D5D5D5'
    },
    fontMainContent: {
        fontSize: width/28,
        color: '#5D5D5D'
    },
    fontNumberIcons: {
        fontSize: width/28,
        color: '#5D5D5D',

        marginRight: width/45
    },

    sizeIcons: {
        marginLeft: 0,
        paddingLeft: 0,

        fontSize: width/20,
        color: "#909090"
    },
    buttonIcons: {
        marginHorizontal: 10,
        padding: 0
    },
    

    flexImage: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'center',

        paddingTop: width/80, 
        paddingBottom: width/80
    },
    imageTweet: {
        flex: 1,
        flexDirection: 'row',

        borderRadius: 20,
        height: width/3
        
    },
    extraMarginWhitImg: {
        marginRight: width/15
    }
  });
  