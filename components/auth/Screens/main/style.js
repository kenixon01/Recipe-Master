import { Dimensions, StyleSheet } from "react-native";
 
export default styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'column',
      backgroundColor: 'white',
    },
    title:{
      fontSize: 40,
      marginBottom: 30,
      color:'black',
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
      color:'#ADC2D4',
    },
    greenBox:{
      backgroundColor:'#B42306',
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