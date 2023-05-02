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
    ingredientLines: {
        margin: 20,
    },
    ingredient: {
        marginBottom: 8,
        fontSize: 15
    },
    browser: {
        fontSize: 15,
        fontStyle: 'italic',
        margin: 20,
        fontWeight: 'bold'
    },
    scrollView: {
        margin: 15,
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 5,
        paddingHorizontal: 50,
        justifyContent: 'space-between',
        width: '100%',
    },
    modal: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        // height: '50%',
        shadowColor: '#000',
            shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
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