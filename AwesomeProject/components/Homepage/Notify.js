import React from 'react'
import { ScrollView, Text, View, StyleSheet, Image } from 'react-native'
import SearchHeader from './SearchHeader'
import avatarfr from '../images/avatarfr.jpg'
import avatar from '../images/avatar.jpg'
export default function Notify() {
  return (
    <ScrollView>
      <SearchHeader />
      <View style={styles.notifyContainer}>
        <Image source={avatarfr} style={styles.avatar} />
        <View style={{
          justifyContent: "center", marginLeft: 10, flexDirection
            : "column"
        }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Skadi has just post an image</Text>
          <Text> a second ago</Text>
        </View>
      </View>
      <View style={styles.notifyContainer}>
        <Image source={avatarfr} style={styles.avatar} />
        <View style={{
          justifyContent: "center", marginLeft: 10, flexDirection
            : "column"
        }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Skadi has just post an image</Text>
          <Text> a second ago</Text>
        </View>
      </View>
      <View style={styles.notifyContainer}>
        <Image source={avatar} style={styles.avatar} />
        <View style={{
          justifyContent: "center", marginLeft: 10, flexDirection
            : "column"
        }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Skadi has just post an image</Text>
          <Text> a second ago</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  notifyContainer: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000",
    flexDirection: "row",

  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 45
  }
})