import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
         
        },
    title:{
        fontWeight: "bold",
        fontSize:50,
        color:'black',
        marginBottom: 40,
        textAlign:'center',
        },
    inputView:{
        backgroundColor:"#EFEFEF",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20,
        alignItems:'center'
        },
    inputText:{
        height:50,
        color:"black"
        },
    SubmitBtn:{
        backgroundColor:"#7fff00",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10,
        width:'20%'
        },
    SubmitText: {
        fontWeight: 'bold',
        },
    darkModeText: {
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        alignSelf:'center'
        },
    headerText:{
        fontSize: 20,
        fontWeight:'bold'
        },
    deleteText: {
        fontSize: 20,
        color: 'red',
        fontWeight: 'bold',
        alignItems:'flex-end',
        },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 44,
        backgroundColor:"#7fff00",
        borderRadius: 50,
        width:'150%'
      },
    button_label: {
        color: 'black',
        fontSize: 15,
        fontWeight:'bold'
      },
    button_Delete: {
        color: 'red',
        fontSize: 15,
        fontWeight:'bold'
      },
    
});