import { StyleSheet } from "react-native";

export default style = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flex: 1,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Title: {
    fontSize: 40,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 1,
    fontFamily: 'PTSansNarrow'
  },
  smallText: {
    fontSize: 15,
    fontStyle: 'italic',
    textAlign: "center",
    color: '#ADC2D4'
  },

  SearchButton: {
    position: "absolute",
    bottom: 35,
    right: 0,
  },
  inputView: {
    backgroundColor: "white",
    borderRadius: 25,
    margin: 15,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
    textAlign: "center",
    textAlignVertical: "top",
  },
  AccountBtn: {
    position: "absolute",
    top: 35,
    right: 0,
  },

  // card: {
  //   height: 225,
  //   backgroundColor: 'white',
  //   width,
  //   marginHorizontal: 2,
  //   borderRadius: 10,
  //   marginBottom: 20,
  //   padding: 15
  // },

  gridItem: {
    // flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 5,
    height: 50,
    borderRadius: 8,
    backgroundColor: 'blue',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
  },

  centeredView: {
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
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {	
    marginBottom: 15,
    textAlign: 'center',
  },




  

});
