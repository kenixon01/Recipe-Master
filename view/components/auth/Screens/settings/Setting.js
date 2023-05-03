import React, { useEffect,useState } from 'react'
import { View, Text, Button, TouchableOpacity, Switch, Alert, ScrollView, SafeAreaView, ImageBackground, ActivityIndicator } from 'react-native';
import styles from './style';
import { useDispatch } from 'react-redux';
import { setDeleteAcct } from '../../../../actions/index';
import { Header, InputBox, AppButton, Title } from '../../lib';
import {gql, useMutation} from '@apollo/client';
import Dialog from "react-native-dialog";

const UPDATE_MUTATION = gql`
    mutation updateUser($email: String!, $name: String!, $password: String!){
        updateUser(input: {email:$email, name:$name, password:$password}){
            user{
                name
                email
            }
            token
        }
    }
`;

const DELETE_MUTATION = gql`
    mutation deleteUser ($email: String!) {
        deleteUser(input: {email: $email})
        
    }
`;


export default function SettingsScreen ({navigation}){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [deleteEmail, setDeleteEmail] = useState('');
    const [password, setPassword] = useState('')
    const [visible, setVisible] = useState(false);

    const [shouldshow, setshouldShow] = useState(false);
    const [isShowing, setIsShowing] = useState(false);

    const [isOn , setIsOn] = React.useState(false);
    const onToggleSwitch = () => setIsOn(!isOn);

    const [deleteUser, {data, error, loading}] = useMutation(DELETE_MUTATION);
    const [updateUser, {data: updateUserData, error: updateUserError, loading: updateUserLoading}] = useMutation(UPDATE_MUTATION);

    const dispatch = useDispatch();

    const handleDeleteAcct = () => {
        dispatch (setDeleteAcct())
    }

    useEffect(() => {
       
        if (updateUserError) {
            Alert.alert('Can not leave fields blank')
        }
      }, [updateUserError])
    
      if (data) {
        handleDeleteAcct()
        //navigation.navigate('');
          }
      const onSubmitDelete = () => {
        deleteUser({variables: { deleteEmail }})
          .then(response => {
            console.log(`Response: ${response}`)
          })
          .catch(err => {
            console.log(`Error: ${err}`)
          })
          setVisible(false);
      }

      const onSubmitUpdate = () => {
        updateUser({variables: {email, password, name}})
        .then(response => {
            console.log(`Response: ${response}`)
          })
          .catch(err => {
            console.log(`Error: ${err}`)
          })
        
      }
      const showDialog = () => {
        setVisible(true);
      };
    
      const handleCancel = () => {
        setVisible(false);
      };


    return (
        <SafeAreaView>
            <ScrollView>
                <ImageBackground style={styles.backgroundImg} source={require('../../../../assets/background.jpg')}>
                    <View style = {styles.container}>
                        <View>
                            <Title fontFamily="PTSansNarrow" color='white' fontSize={40}>Settings</Title>
                            <TouchableOpacity onPress={() => setshouldShow(!shouldshow)}> 
                                <Header textAlign={'left'}>Update User Information</Header>
                            </TouchableOpacity>
                            {shouldshow ? (
                                <View>
                                    <InputBox
                                        placeholder = "First Name"
                                        value={name}
                                        onChangeText={setName}
                                        
                                    />
                                    
                                    <InputBox
                                        placeholder = "Email Address"
                                        keyboardType={"email-address"}
                                        value={email}
                                        onChangeText = {setEmail}
                                    />
                                
                                    <InputBox
                                        placeholder = "Password"
                                        secureTextEntry={true}
                                        value={password}
                                        onChangeText = {setPassword}
                                    />
                                    <AppButton onPress={() => onSubmitUpdate()}>Save Changes</AppButton>
                                </View>
                            ) : null } 
                            <TouchableOpacity onPress={() => setIsShowing(!isShowing)}> 
                                <Header textAlign={'left'}>Accessibility</Header>
                            </TouchableOpacity>

                            {isShowing ? (
                                <View>
                                    <View style={styles.accessibilityContainer}>
                                        <Text style={styles.darkModeText}>Dark Mode</Text>
                                        <Switch
                                            value = {isOn}
                                            onValueChange = {onToggleSwitch}
                                            trackColor ={{false:'black', true:'white'}}
                                            thumbColor = {isOn ? "black": "white"}
                                        />
                                    </View>
                                </View>
                            ) :null } 
                        </View>
                    <View style = {{bottom : '5%', position : 'absolute' }}>
                        <Button title='Delete Account ?!? '  color={'#4F5200'} onPress={showDialog}/>
                        <Dialog.Container visible={visible}>
                        <Dialog.Title>Account delete</Dialog.Title>
                            <Dialog.Description>
                            Do you want to delete this account? You cannot undo this action.
                            Type your Email to delete Account
                            </Dialog.Description>
                        <Dialog.Input label ='Email' value={deleteEmail} onChangeText={setDeleteEmail}></Dialog.Input>
                        <Dialog.Button label="Cancel" onPress={handleCancel} />
                        <Dialog.Button label="Delete" onPress={onSubmitDelete} />
                        </Dialog.Container>
                  </View>
                </View>
            </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    );
}