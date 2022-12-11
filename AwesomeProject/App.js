import { NavigationContainer, Navigatior } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, SafeAreaView } from 'react-native';
import { NativeRouter, Route, Routes } from 'react-router-native';
import Login from './components/DemoLogin/LoginTest.js';
import Otp from './components/DemoLogin/Otp.js';
import Success from './components/DemoLogin/Success.js';

const Stack = createNativeStackNavigator();

export default class App extends Component{
  render(){
    return (
      <ScrollView>
        <View style={styles.textPosition}>
          <Text style={styles.text} >Hello World</Text>
        </View>
      </ScrollView>
    )
  }



  /*<NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name={"Login"} component={Login} />
          <Stack.Screen name={"Otp"} component={Otp} />
          <Stack.Screen name={"Success"} component={Success} />
        </Stack.Navigator>
      </NavigationContainer>*/

}

const styles = StyleSheet.create({
  text: {
    fontSize: 32,

  },
  textPosition: {
    alignItems: "center",
    marginTop: 20
  }
})

