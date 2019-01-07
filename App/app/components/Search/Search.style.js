import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 0.15,
      flexDirection: 'row',
    },

    input: {
      width: '70%',
      height: '80%',
      borderColor: 'black',
      borderTopWidth: 0.5,
      borderBottomWidth: 0.5,
      borderLeftWidth: 0.5,
      borderRightWidth: 0.5,
      marginTop: 5,
      marginLeft: 10,
      paddingLeft: 5
    },

    searchButton: {
      width:'30%',
      justifyContent: 'center',
      height: '80%',
      marginTop: 5,
      paddingRight: 10
    },

    hideBottomBorder: {
      borderBottomWidth: 0
    },

    searchButtonText: {
      color: 'white',
      textAlign: 'center',
      marginHorizontal: 20
    }
});

export default styles;