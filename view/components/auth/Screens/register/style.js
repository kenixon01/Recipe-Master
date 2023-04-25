import { StyleSheet, Dimensions } from "react-native";

export default style = StyleSheet.create({
  container: {
    padding: '5%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 100
  },
  forgotAndSignUpText:{
    fontSize: 15
  },
  text: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 12,
    marginHorizontal: '10%',
    color: 'black'
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