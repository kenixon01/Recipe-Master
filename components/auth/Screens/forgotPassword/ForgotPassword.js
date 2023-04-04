import React, {Component} from "react";
import { Text, View, Image, TextInput, TouchableOpacity, ActivityIndicator, ImageBackground } from "react-native";
import style from './style'
import * as Font from 'expo-font';

class ForgotPassword extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fontsLoaded: false
        }
        
    }

    async loadFonts() {
      await Font.loadAsync({
        PTSansNarrow: require('../../../../assets/fonts/PTSansNarrow-Bold.ttf'),
      });
      this.setState({ fontsLoaded: true });
    }

    render() {
        while(!this.state.fontsLoaded) {
            this.loadFonts()
            return (
              <View style={style.activityIndicator}>
                <ActivityIndicator size={"large"}/>
              </View>
            )
        }
        return (
            <ImageBackground
                style = {style.image}
                source={require('../../../../assets/20221230_143041_2122.jpg')}>
                <View style = {style.container}>
                    {/* <Image source={require('../../../../assets/20221230_1452122.jpg')} style={style.image}/> */}
                    <Text style={{...style.title, fontFamily: 'PTSansNarrow'}}> Forgot Password</Text>
                    <View style = {style.inputView}>
                        <TextInput 
                            style = {style.inputText}
                            placeholder = "Email"
                            placeholderTextColor="#003f5c"
                            onChangeText = {(email) => this.setState({email})}
                        />
                    </View>
                    <TouchableOpacity style={style.SignupBtn}>
                        <Text style={style.loginText}>Submit</Text> 
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

export default ForgotPassword