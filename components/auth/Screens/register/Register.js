import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Image, Alert } from 'react-native'
import style from './style'

  
export class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastname: '',
            userName: '',
        };
    }

    componentDidMount(){

    }
  
    // SetStates() {
    //   const [firstName, setFirstName] = useState('')
    // }
    
    checkInput = () =>{
      const {firstName, password, lastname, email, userName} = this.state;
      if (!firstName.trim() || !lastname.trim() || !email.trim() || !userName.trim() || !password.trim()){
        Alert.alert('Field Error','No fields can remain blank')
        return;
      }
      else if (password.length <= 8){
        Alert.alert('Password Error','Password must be at least 8 characters')
      }

    }
  render() {
    const {navigation} = this.props;
  
    return (
      <View style = {style.container}>
         
        <ImageBackground 
         style = {style.image}>
    
      <Text style={style.title}> Recipe Generator</Text>
      <View style = {style.inputView}>
         <TextInput
            style = {style.inputText}
            placeholder = "First Name"
            placeholderTextColor="#003f5c"
            onChangeText = {(firstName) => this.setState({firstName})}
            />
          </View>

          <View style = {style.inputView}>
        <TextInput 
            style = {style.inputText}
            placeholder = "Last Name"
            placeholderTextColor="#003f5c"
            onChangeText = {(lastname) => this.setState({lastname})}
            />
            </View> 

      <View style = {style.inputView}>
        <TextInput 
            style = {style.inputText}
            placeholder = "Email"
            placeholderTextColor="#003f5c"
            onChangeText = {(email) => this.setState({email})}
            />
            </View>
            <View style = {style.inputView}>
        <TextInput 
            style = {style.inputText}
            placeholder = "User Name"
            placeholderTextColor="#003f5c"
            onChangeText = {(userName) => this.setState({userName})}
            />
            </View>  
        <View style = {style.inputView}>
         <TextInput
            style = {style.inputText}
            placeholder = "Password"
            placeholderTextColor="#003f5c"
            onChangeText = {(password) => this.setState({password})}
            />
          </View> 
          <View>
            <Text style = {style.text}>Must be at least 8 characters and include at least 1 special
              character
            </Text>
          </View>
        <TouchableOpacity style={style.SignupBtn} onPress = {this.checkInput}>
            <Text>Sign Up</Text> 
        </TouchableOpacity>
        <View style = {{flexDirection: 'row'}}>
          <Text>Already have an account ?</Text>
          <Text onPress={() => this.props.navigation.navigate("Login")} style = {style.LoginText}> Login </Text>
          
        </View>
        </ImageBackground>
      </View>
    )
  }
}

export default Register