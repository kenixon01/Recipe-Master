import { StyleSheet, Dimensions } from "react-native";

export default style = StyleSheet.create({
  container: {
      alignItems: 'center',
      backgroundColor: '#fffe',
      justifyContent: 'center',
      width: Dimensions.get('window').width,
      height: Dimensions.get('screen').height,
  },
  root: {flex: 1, padding: 20},
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 30,
    height: 30,
    lineHeight: 24,
    fontSize: 24,
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    textAlign: 'center',
    margin: 2
  },
  focusCell: {
    borderBottomColor: '#BFA600',
    backgroundColor: '#eaeaea'
  },
})