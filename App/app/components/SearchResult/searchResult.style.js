import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  activityIndicatorContainer:{
      alignItems: 'center',
      justifyContent: 'center',
      flex: 0.85,
  },

  container: {
    flex: 0.85,
    paddingLeft: 10,
  },

  row:{
      borderBottomWidth: 1,
      borderColor: "#ccc",
      padding: 10
  },

  title:{
      fontSize: 15,
      fontWeight: "600"
  },

  description:{
      marginTop: 5,
      fontSize: 14,
  }
});

export default styles;