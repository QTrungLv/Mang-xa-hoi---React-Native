import { NavigationContainer, Navigatior } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';


import SignInUser from "./components/SignIn/SignInUser.js";
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import StartSignUp from './components/SignUp/StartSignUp';


const Stack = createNativeStackNavigator();

export default function App2() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Sign In User'>
        <Stack.Screen name={"signup"} component={SignUp} />
        <Stack.Screen name={"signin"} component={SignIn} />
        <Stack.Screen name={"startlogin"} component={StartSignUp} />
        <Stack.Screen name={"Sign In User"} component={SignInUser} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


