import { Dimensions, StyleSheet } from "react-native";
 
export default styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'column',
      backgroundColor: 'white',
    },
    title:{
      fontSize: Dimensions.get('window').width * 0.1,
      color:"black",
      marginTop: 40,
      textAlign:'center',
      fontSize:40,
    },
    image: {
      alignSelf:'center',
      width: Dimensions.get('window').width * 1.3,
      height: Dimensions.get('window').width * .7,
      borderBottomLeftRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) * 3,
      borderBottomRightRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) * 3,
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
      color:'#228b22',
    },
    greenBox:{
      backgroundColor:'#D6E4CD',
      height: 150,
      justifyContent:'center',
      alignItems:'center',
    },
    whiteBox:{
      backgroundColor:'white',
      height: 150,
      justifyContent:'center',
      alignItems:'center',
    },
  });