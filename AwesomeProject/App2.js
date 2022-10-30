import { NavigationContainer, Navigatior } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NativeRouter, Route, Routes } from 'react-router-native';
import Home from './components/UI/Home.js';
import NameLogin from './components/UI/NameLogin.js';
import Test from './components/UI/Test.js';

const Stack = createNativeStackNavigator();

export default function App2(){

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name={"Tạo tài khoản"} component={Home} />
        <Stack.Screen name={"Test"} component={Test} />
        <Stack.Screen name={"NameLogin"} component={NameLogin} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}


