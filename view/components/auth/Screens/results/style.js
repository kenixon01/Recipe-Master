import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container:{
        paddingHorizontal:10,
        paddingVertical:10,
        flex:1,
        height: '100%'
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
    },centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#B42306',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {	
        marginBottom: 5,
        textAlign: 'center',
        fontWeight: "400"
      },
    
    
});