import { Dimensions, StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'column',
      backgroundColor: 'white',
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height
    },
    image: {
      alignSelf:'flex-end',
      width: Dimensions.get('window').width * 1,
      height: Dimensions.get('window').width * 1,
      borderRadius: Dimensions.get('window').width
    },
    SmallerTxt:{
      fontSize: 15,
      fontStyle:'italic',
      textAlign:'center',
      color:'#BFA600',
    },
    allRecentSearches:{
      flexDirection: 'row',
      justifyContent:'center',
      alignItems: 'center',
      flexWrap:'wrap',
      rowGap: '10',
    },
  });