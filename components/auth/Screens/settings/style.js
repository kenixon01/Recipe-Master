import { Dimensions, StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        padding: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) * .03,
        flex: 1,
        backgroundColor: 'blue',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    title:{
        fontSize: 40,
        color:'black',
    },
    inputView:{
        width: Dimensions.get('window').width * 0.8,
        backgroundColor:"#EFEFEF",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20,
        borderWidth: 1,
        borderColor: "#ddd",
        borderStyle: 'solid',
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
        position: "absolute",
        fontSize: 20,
        color: 'red',
        fontWeight: 'bold',
        marginBottom: 30
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