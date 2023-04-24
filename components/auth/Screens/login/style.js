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
  image: {
    width: 120,
    height: 160,    
  },
  activityIndicator: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"  
  },
  forgotAndSignUpText:{
    fontSize:15
  },
  SignUpText: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    fontSize: 15
  }
});