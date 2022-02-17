import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import {auth} from '../../../config/firebaseconfig'
import { db } from '../../../config/firebaseconfig';
import {collection, query, orderBy, onSnapshot, where, getDocs} from "firebase/firestore"

export default function Home({navigation}){

    const user_id = auth.currentUser;

    return(
        <View style={styles.container}>
           
            <View style={styles.form}>
                <Text style={styles.text_perfil}>Perfil</Text>
            </View>

            <View style={styles.data}>
                <Text style={styles.data_text}>
                E-mail: {user_id.email}
                </Text>
            </View>

       
        </View>
    )}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      form:{
          flex: 2,
          marginTop:50,
          alignItems: 'center',
      },
      text_perfil:{
          fontSize:32,
          fontWeight: 'bold'
      },
      data:{
          flex: 3,
      },
      data_text:{
          fontSize:20,
          marginLeft: 30,
          paddingTop:10
      }
    
});