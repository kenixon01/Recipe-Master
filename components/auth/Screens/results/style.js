import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container:{
        paddingHorizontal:10,
        paddingVertical:10,
        flex:1
    },
    activityIndicator: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"  
    },
    Title: {
        fontSize: 40,
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',    
    },
    SearchButton:{
       position:'absolute',
       bottom:35,
       right:0
    },
    inputView:{
        backgroundColor:"white",
        borderRadius:25,
        margin:15,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20,
        textAlign:'center',
        textAlignVertical:'top',
        },
    AccountBtn:{
        position:'absolute',
        top: 35,
        right: 0,
    },   
    
});