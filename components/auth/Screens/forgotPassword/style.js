import { StyleSheet, Dimensions } from "react-native";

export default style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
      fontSize: 60,
      marginBottom: 30,
      color:'#B42306',
      padding: 15,
      textAlign: 'center'
    },
    activityIndicator: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"  
    },
    inputView:{
        width: Dimensions.get('window').width * 0.8,
        backgroundColor:"white",
        borderRadius:25,
        height:50,
        borderWidth: 1,
        borderColor: "#ddd",
        borderStyle: 'solid',
        marginBottom:20,
        justifyContent:"center",
        padding:20,
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems:'center',
    },
    inputText:{
        height:50,
        color:"white"
    },
    forgotAndSignUpText:{
        color:"white",
        fontSize:11
    },
    loginText: {
        fontSize: 20,
        fontWeight: '400',
        color: 'white'
    },
    SignupBtn:{
        backgroundColor:"#B42306",
        borderRadius:25,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor:'#8A1B05',
        height:50,
        width: Dimensions.get('window').width * 0.8,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
    },
})