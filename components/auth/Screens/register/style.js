import { StyleSheet } from "react-native";

export default style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        },
    title:{
      fontWeight: "bold",
      fontSize:50,
      color:'black',
      marginBottom: 40,
      },
    inputView:{
      width:"80%",
      backgroundColor:"#EFEFEF",
      borderRadius:25,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20
      },
    inputText:{
      height:50,
      color:"black"
      },
    forgotAndSignUpText:{
      color:"white",
      fontSize:11
      },
    SignupBtn:{
      width:"80%",
      backgroundColor:"#7fff00",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      marginBottom:10
      },
    text: {
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      fontSize: '10'
      },
    LoginText: {
      fontWeight: 'bold',
      fontStyle: 'italic',
      textDecorationLine: 'underline'
      },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems:'center',
      
    },
    overlay: {
      backgroundColor:'transparent',
      opacity: 0.6
  },
  });