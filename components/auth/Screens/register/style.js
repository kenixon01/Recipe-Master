import { StyleSheet, Dimensions } from "react-native";

export default style = StyleSheet.create({
  container: {
    padding: '5%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 100
  },
  title:{
    fontSize: 60,
    marginBottom: 30,
    color:'#4F5200',
    padding: 15,
  },
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
    color:"ddd"
  },
  forgotAndSignUpText:{
    fontSize: 15
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
    marginBottom:10
  },
  signUpText:{
    fontSize: 20,
    fontWeight: '400',
    color: 'white'
  },
  text: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 12,
    marginHorizontal: '10%',
    color: '#4F5200'
  },
  LoginText: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    fontSize: 15
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems:'center',
  },
  overlay: {
    backgroundColor:'transparent',
    opacity: 0.9
  },
});