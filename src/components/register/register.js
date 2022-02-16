import React, { useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, KeyboardAvoidingView } from 'react-native';
import {auth} from '../../../config/firebaseconfig'
import { db } from '../../../config/firebaseconfig'
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Background from '../../img/background.jpg'

export default function Register({navigation}){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');

    const onChangeEmail = (txtEmail) => {
        setEmail(txtEmail)
    }
    const onChangePassword = (txtPassword) => {
        setPassword(txtPassword)
    }
    const onChangeName = (txtName) => {
        setName(txtName)
    }
    const onChangeCountry = (txtCountry) => {
        setCountry(txtCountry)
    }

    async function createUser(){
        await createUserWithEmailAndPassword(auth, email, password)
        .then(value => {
            addDoc(collection(db, "data"), {
                Email: email,
                Name: name,
                Country: country,
                user_id: value.user.uid
            })
            navigation.navigate("login")
        })
        .catch(error => colorize(error))
    }

    return(
        <KeyboardAvoidingView style={styles.container}  behavior={Platform.select({
            ios: 'padding',
            android: null,
        })}>
            <ImageBackground source={Background} resizeMode="cover" style={styles.image}>

            <View style={styles.central_text_view}>
                <Text style={styles.central_text}>Welcome to Firebase</Text>
            </View>
            
            <View style={styles.form}>

                <TextInput 
                style={styles.text_form} 
                placeholder="E-mail"
                placeholderTextColor="white"
                value={email}
                onChangeText={txtEmail => onChangeEmail(txtEmail)}
                />

                <TextInput 
                style={styles.text_form} 
                secureTextEntry
                placeholder="Password"
                placeholderTextColor="white"
                value={password}
                onChangeText={txtPassword => onChangePassword(txtPassword)}
                />

                <TextInput 
                style={styles.text_form} 
                placeholder="Enter you first name"
                placeholderTextColor="white"
                value={name}
                onChangeText={txtName => onChangeName(txtName)}
                />

                <TextInput 
                style={styles.text_form} 
                placeholder="Enter you Country"
                placeholderTextColor="white"
                value={country}
                onChangeText={txtCountry => onChangeCountry(txtCountry)}
                />

                <View style={styles.button_view}>
                    <TouchableOpacity
                    style={styles.button}
                    >
                        <Text
                        style={styles.button_text}
                        onPress={createUser}
                        >
                        Register
                        </Text>
                    </TouchableOpacity>
                    <Text 
                    style={styles.text_login}
                    onPress={() => navigation.navigate("login")}
                    >
                        Already have an account? Sign in
                    </Text>
                </View>
            </View>
            
        </ImageBackground>
        </KeyboardAvoidingView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
     form: {
         flex:2,
         alignItems: 'center',
         marginTop: 200
     },
     button_view:{
        justifyContent: 'center',
        alignItems: 'center',
        flex:2,
        marginTop: 40
     },
     button_text:{
        textAlign: "center",
        paddingTop:11,
        fontSize:19,
        color:"#fff"
     },
     button: {
         borderWidth:2,
         width:200,
         height:50,
         borderRadius: 30,
         backgroundColor:"#7FA7E6",
         borderColor:"#384A66"
     },
     text_form:{
         paddingTop:15,
         borderBottomWidth:2,
         borderBottomColor:"#fff",
         width:290,
         paddingLeft:10,
         paddingBottom:3,
         color: "#fff",
     },
     image: {
         flex:1
      },
      central_text_view:{
          alignItems: 'center',
          paddingTop:90,
      },
      central_text:{
        fontSize:24,
        color:"white",
        fontWeight:"bold"      
    },
    text_login:{
        paddingTop:10,
        color:"#384A66",
        fontWeight:"bold"
    }
});