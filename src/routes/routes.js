import React from 'react'
import Register from '../components/register/register'
import Login from '../components/login/login'
import Home from '../components/home/home'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Routes(){

  const Stack = createNativeStackNavigator();

    return(
        <Stack.Navigator>
        <Stack.Screen
          name="register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    )
}