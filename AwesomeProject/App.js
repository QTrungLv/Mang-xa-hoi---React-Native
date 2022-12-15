import { NavigationContainer, Navigatior } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NativeRouter, Route, Routes } from 'react-router-native';
import HomePage from './components/Homepage/HomePage.js';
import Redirect from './components/Redirect/Redirect.js';
import InputSignIn from './components/SignIn/Input.js';
import Otp from './components/SignIn/Otp.js';
import SignIn from './components/SignIn/SignIn.js';
import StartSignUp from './components/SignUp/StartSignUp.js';
import Home from './components/UI/Home.js';
import NameLogin from './components/UI/NameLogin.js';
import Test from './components/UI/Test.js';
import SignInContextProvider from './context/SignInContext.js';

import { store } from './store/store.js';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='SignIn' >
          {/* <Stack.Screen name={"Redirect"} component={Redirect} /> */}
          <Stack.Screen name={"OTP"} component={Otp} />
          <Stack.Screen name={"SignIn"} component={SignIn} />
          {/* <Stack.Screen name={"NameLogin"} component={NameLogin} /> */}
          <Stack.Screen name={"HomePage"} component={HomePage} />
          {/* <Stack.Screen name={"Input"} component={InputSignIn} /> */}
        </Stack.Navigator>
      </NavigationContainer>

  )
}


