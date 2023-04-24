import { StyleSheet, Dimensions } from "react-native";

export default style = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#fffe',
        justifyContent: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('screen').height,
    },
})