//This is an example code to understand Image//
import React, { Component } from 'react';
//import react in our code.
import { Text, Image, View, StyleSheet, ScrollView } from 'react-native';
//import all the components we are going to use.
export default function App2() {

  const data = [
    {
      key: 1,
      title: "Username"
    },
    {
      key: 2,
      title: "Password"
    },
    {
      key: 3,
      title: "Confirm Password"
    }
  ]

  return (
    <View>
      {
        data ?
        data.map((item) => {
          return (
            <View style={{ backgroundColor: "white", borderWidth: 1, borderColor: "#000", padding: 10, margin: 10 }} key={item.key}>
              <Text>{item.key}</Text>
              <Text>{item.title}</Text>
            </View>
          )
        }) : <></>
      }

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    backgroundColor: '#ecf0f1',
  },
});
