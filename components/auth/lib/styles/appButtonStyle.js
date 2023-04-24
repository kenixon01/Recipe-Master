import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  button:{
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
  text:{
    fontSize: 20,
    fontWeight: '400',
    color: 'white'
  },
})