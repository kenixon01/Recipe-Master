import { Dimensions, StyleSheet } from "react-native";
 

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'column',
      backgroundColor: 'white',
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height
    },
    title:{
      fontSize: 40,
      marginBottom: 30,
      color:'#BFA600',
      padding: 15,
      textAlign: 'center'
    },
    image: {
      alignSelf:'flex-end',
      width: Dimensions.get('window').width * 1,
      height: Dimensions.get('window').width * 1,
      borderRadius: Dimensions.get('window').width
    },
    inputView:{
      width:"80%",
      backgroundColor:"white",
      borderRadius:25,
      height:50,
      padding:20,
      justifyContent:"center",
      borderColor: "#ddd",
      borderWidth: 1,
    },
    inputText:{
        height:50,
        color:"black",
        textAlign: "center"
    },
    header:{
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    SmallerTxt:{
      fontSize: 15,
      fontStyle:'italic',
      textAlign:'center',
      color:'#BFA600',
    },
    greenBox:{
      backgroundColor:'#4F5200',
      justifyContent:'center',
      alignItems:'center',
      padding: 10
    },
    recentSearches:{
      padding: 7,
      margin: 5,
      borderRadius: 100,
    },
    recentSearchText:{
      fontSize: 15,
    },
    allRecentSearches:{
      flexDirection: 'row',
      justifyContent:'center',
      alignItems: 'center',
      flexWrap:'wrap',
      rowGap: '10',
      
    },
    whiteBox:{
      backgroundColor:'white',
      justifyContent:'center',
      alignContent:'center',
      padding: 10
    },
  });