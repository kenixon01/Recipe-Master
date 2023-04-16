import { StyleSheet, Dimensions } from "react-native";

export default style = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#fffe',
        borderRadius: 50,
        padding: 50,
        width: Dimensions.get('window').width
    },
    title:{
      fontSize: 40,
      marginBottom: 30,
      color:'#4F5200',
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
        // marginBottom:20,
        justifyContent:"center",
        padding:20,
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      justifyContent: 'center',
    //   alignItems:'center',
    },
    inputText:{
        height:50,
        color:"black"
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
        backgroundColor:"#D6BA00",
        borderRadius:25,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor:'#BFA600',
        height:50,
        width: Dimensions.get('window').width * 0.8,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        // marginBottom:10
    },
})