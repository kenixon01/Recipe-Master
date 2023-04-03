import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  containerBottom: {
    flex: 1,
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:30,
    marginTop:Dimensions.get('window').height * .2,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  container: {
    flex: 1,
    justifyContent:'space-between',
    alignItems:'center',
  },
  loginContainer: {
    display:'flex',
    
  },
  title:{
    fontSize: Dimensions.get('window').width * 0.1,
    color:"white",
    marginTop: 40,
    fontSize: 50
  },
  inputView:{
    width: Dimensions.get('window').width * 0.8,
    backgroundColor:"#EFEFEF",
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
    color:"ddd"
  },
  loginText:{
    fontSize: 20,
    fontWeight: '400'
  },
  forgotAndSignUpText:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
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
  SignUpText: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    color:'white'
  }
});