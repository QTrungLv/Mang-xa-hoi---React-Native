import { NavigationContainer, Navigatior } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NativeRouter, Route, Routes } from 'react-router-native';
import Login from './components/DemoLogin/LoginTest.js';
import Otp from './components/DemoLogin/Otp.js';
import Success from './components/DemoLogin/Success.js';
import Home from './components/UI/Home.js';
import NameLogin from './components/UI/NameLogin.js';
import Test from './components/UI/Test.js';

const Stack = createNativeStackNavigator();

export default function App2() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name={"Login"} component={Login} />
        <Stack.Screen name={"Otp"} component={Otp} />
        <Stack.Screen name={"Success"} component={Success} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


