import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
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
    inputText:{
      height:50,
      color: "black"
    },
})