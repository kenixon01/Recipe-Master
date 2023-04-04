import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  containerBottom: {
    flexGrow: 2,
    justifyContent:'space-between',
    alignItems:'center',
    width: Dimensions.get('window').width,
    padding: '5%',
    backgroundColor: '#fffe',
    borderTopLeftRadius: Dimensions.get('window').width / 2,
    borderTopRightRadius: Dimensions.get('window').width / 2,
    paddingTop: 100
  },
  container: {
    flex: 1,
    alignItems:'center',
    backgroundColor: "white",
    width: Dimensions.get('window').width,
    paddingTop: 200
  },
  title:{
    fontSize: 60,
    marginBottom: 30,
    color:'white',
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
  image: {
    // position: 'absolute',
    width: 120,
    height: 160,    
    // alignSelf: 'center',
    // margin: "10%",
  },
  // background: {
  //   backgroundColor: 'white'
  // },
  inputText:{
    height:50,
    color: "#ddd"
  },
  loginText:{
    fontSize: 20,
    fontWeight: '400',
    color: 'white'
  },
  activityIndicator: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"  
  },
  forgotAndSignUpText:{
    // color:"white",
    fontSize:15
  },
  loginBtn:{
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
  SignUpText: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    fontSize: 15
    // color:'white'
  }
});