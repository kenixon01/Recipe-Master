import { StyleSheet, Dimensions } from "react-native";

export default style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
        alignItems: 'center',
    },
    image: {
        alignSelf:'center',
        width: Dimensions.get('window').width * 1.3,
        height: Dimensions.get('window').width * .7,
        borderBottomLeftRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) * 3,
        borderBottomRightRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) * 3,
    },
    title:{
        fontSize: Dimensions.get('window').width * 0.1,
        color:"black",
        marginTop: 40,
        textAlign:'center',
        fontSize:40,
    },
    inputView:{
        width:"80%",
        backgroundColor:"#eaeaea",
        borderRadius:25,
        height:50,
        padding:20,
        justifyContent:"center",
        borderColor: "#ddd",
        borderWidth: 1,
        marginVertical: 20
    },
    inputText:{
        height:50,
        color:"white"
    },
    forgotAndSignUpText:{
        color:"white",
        fontSize:11
    },
    SignupBtn:{
        backgroundColor:"#4db800",
        borderRadius:25,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor:'#00b806',
        height:50,
        width: Dimensions.get('window').width * 0.8,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
    },
})