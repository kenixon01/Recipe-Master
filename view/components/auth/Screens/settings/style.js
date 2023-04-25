import { Dimensions, StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        paddingHorizontal: Dimensions.get('window').width * .1,
        paddingTop: Dimensions.get('window').height * .1,
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        justifyContent: 'space-between',
    },
    backgroundImg:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    accessibilityContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    darkModeText: {
        fontSize: 20,
    },
    deleteText: {
        fontSize: 20,
        color: 'red',
        fontWeight: 'bold',
        marginBottom: 30
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 44,
        backgroundColor:"#7fff00",
        borderRadius: 50,
        width:'150%'
    },
    button_label: {
        color: 'black',
        fontSize: 15,
        fontWeight:'bold'
    },
    button_Delete: {
        color: 'red',
        fontSize: 15,
        fontWeight:'bold'
    },
    
});