import { Dimensions, StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        paddingHorizontal: Dimensions.get('window').width * .1,
        paddingTop: Dimensions.get('window').height * .1,
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        justifyContent: 'space-between',
    },
    title:{
        fontSize: 40,
        color:'black',
    },
    backgroundImg:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    inputView:{
        width: Dimensions.get('window').width * 0.8,
        backgroundColor:"#fafafa",
        borderRadius:25,
        height:50,
        marginBottom:10,
        marginTop:20,
        justifyContent:"center",
        padding:20,
        borderWidth: 1,
        borderColor: "#ddd",
        borderStyle: 'solid',
    },
    inputText:{
        height:50,
        color: "black",
    },
    accessibilityContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    SubmitBtn:{
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
    SubmitText: {
        fontSize: 20,
        fontWeight: '400',
        color: 'white'
    },
    darkModeText: {
        fontSize: 20,
    },
    headerText:{
        fontSize: 25,
        fontWeight:'bold'
    },
    deleteText: {
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