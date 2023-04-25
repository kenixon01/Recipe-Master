import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, 
    TouchableOpacity, Switch, Alert } from 'react-native';
import {gpl, useMutation} from '@apollo/client'

const UPDATE_MUTATION = gql`
    mutation updateUser($email: String, $name: String, $password: String){
        updateUser(input: {email:$email, name:$name, password:$password}){
            user{
            name
            email
            password
            }
        }
    }
`;

const DELETE_MUTATION = gql`
    mutation deleteUser ($id: ID!) {
        deleteUser(id: $id){
        id
        }
    }
`

export default function SettingsScreen ({navigation}){
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassowrd] = useState()
    const [username, setUserName] = useState()

    const [shouldshow, setshouldShow] = useState(false);
    //const [darkMode, setDarkMode] = useState(false);
    const [isShowing, setIsShowing] = useState(false);

    const [isOn , setIsOn] = React.useState(false);
    const onToggleSwitch = () => setIsOn(!isOn);

    const [deleteUser, {data, error, loading}] = useMutation(DELETE_MUTATION);
    const [updateUser, {data: updateUserData, error: updateUserError, loading: updateUserLoading}] = useMutation(UPDATE_MUTATION);

    useEffect(() => {
        if (error) {
          Alert.alert('Could not delete Account');
          
        }
      },[error])
    
      if (data) {
        // save token
        AsyncStorage
          .setItem('token', data.signIn.token)
          .then(() => {
            // redirect home
            navigation.navigate('Register')
          })
      }
      
      const onSubmit = () => {
        deleteUser({variables: { id: id }})
          .then(response => {
            console.log(`Response: ${response}`)
          })
          .catch(err => {
            console.log(`Error: ${err}`)
          })
      }

    const handleLogout = () => {
        navigation.navigate("Login");
        // Alert.alert('Account has been deleted',
        // [ {text: 'Okay'} ],
        //   { cancelable: false })
    }

    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>User Settings</Text>
        
        <TouchableOpacity onPress={() => setshouldShow(!shouldshow)}> 
        <Text style = {styles.headerText}>{'                 '}
        Update Personal Information</Text>
         </TouchableOpacity>

         {shouldshow ? (
            <View >

             {/** First name */}
        <View style = {styles.inputView}>
          <TextInput 
              style = {styles.inputText}
              placeholder = "First Name"
              placeholderTextColor="#003f5c"
              />
        </View>

        {/** Last name */}
        <View style = {styles.inputView}>
          <TextInput 
              style = {styles.inputText}
              placeholder = "Last Name"
              placeholderTextColor="#003f5c"
              />
        </View>

        {/** Email */}
        <View style = {styles.inputView}>
          <TextInput 
              style = {styles.inputText}
              placeholder = "Email Address"
              placeholderTextColor="#003f5c"
              />
        </View>

        {/** User name */}
        <View style = {styles.inputView}>
          <TextInput 
              style = {styles.inputText}
              placeholder = "Username"
              placeholderTextColor="#003f5c"
              />
        </View>

        {/** Password */}
        <View style = {styles.inputView}>
          <TextInput 
              style = {styles.inputText}
              placeholder = "Password"
              placeholderTextColor="#003f5c"
              />
        </View>
        
        <View style = {{alignItems:'center'}}>
        <TouchableOpacity style={styles.SubmitBtn}>
            <Text style={styles.SubmitText}>Save Changes</Text> 
        </TouchableOpacity> 
        </View>

        </View>
        ) :null } 

        <Text>{'\n'}  </Text>

        <TouchableOpacity onPress={() => setIsShowing(!isShowing)}> 
        <Text style = {styles.headerText}>{'                 '}
            Accessibility</Text>
         </TouchableOpacity>


         {isShowing ? (
            <View >
            <View style = {{flexDirection: 'row', justifyContent:'space-evenly'}}>
            <Text style = {styles.darkModeText}>Dark Mode  </Text>
            <Switch
                    value = {isOn}
                    onValueChange = {onToggleSwitch}
                    trackColor ={{false:'black', true:'white'}}
                    thumbColor = {isOn ? "black": "white"}
            />
            </View>
        </View>
        ) :null } 
        <View style = {{bottom : 0, position : 'absolute' }}>
            <TouchableOpacity
                onPress={() => Alert.alert(
                    'Delete Account ?!?',
                    'Are you sure you want to delete your account?',
                    [
                      {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
                      {text: 'Confirm ',onPress: (handleLogout) },
                    ],
                    { cancelable: false }
                  )}>
                <Text style = {styles.deleteText}>Delete Account ?</Text>
            </TouchableOpacity>
        </View>
        <View style = {{flexDirection: 'row', justifyContent:'space-evenly'}} >
        <TouchableOpacity >
            <View style = {styles.button}>
                <Text style = {styles.button_label}>Sign out</Text>           
            </View>
        </TouchableOpacity>
        </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        
        },
    title:{
        fontWeight: "bold",
        fontSize:50,
        color:'black',
        marginBottom: 40,
        textAlign:'center',
        },
    inputView:{
        backgroundColor:"#EFEFEF",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20,
        alignItems:'center'
        },
    inputText:{
        height:50,
        color:"black"
        },
    SubmitBtn:{
        backgroundColor:"#7fff00",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10,
        width:'20%'
        },
    SubmitText: {
        fontWeight: 'bold',
        },
    darkModeText: {
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        alignSelf:'center'
        },
    headerText:{
        fontSize: 20,
        fontWeight:'bold'
        },
    deleteText: {
        fontSize: 20,
        color: 'red',
        fontWeight: 'bold',
        alignItems:'flex-end',
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