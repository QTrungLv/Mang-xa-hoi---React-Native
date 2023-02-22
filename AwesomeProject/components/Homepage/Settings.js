import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Pressable, SafeAreaView, Text, View, Image } from 'react-native'
import { connect, useSelector } from 'react-redux'


const Setting = (props) => {
  const userInfo = useSelector(state => state.user)
  const [token, setToken] = useState("")

  useEffect(() => {
    getToken()
  }, [])

  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem("@UserToken")

      if (value != null) {
        setToken(value)
      }

    } catch (error) {

    }
  }

  const removeToken = async () => {
    try {
      await AsyncStorage.removeItem("@UserToken")
    } catch (error) {
      console.log(error)
    }
  }

  const handleLogout = async () => {

    removeToken()
    props.navigation.navigate("SignIn")
    //   try {
    //     const response = axios.post("http:10.0.2.2:8000/logout", {
    //       token: token
    //     })

    //     removeToken()
    //     props.navigation.navigate("SignIn")
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
  }
  return (
    <SafeAreaView>
      <View>
        <Image source={{ uri: userInfo.avatar }} />
      </View>
      <Pressable style={{ alignSelf: "flex-start", padding: 10, borderWidth: 1, borderColor: "#000", backgroundColor: "lightgray" }} onPress={handleLogout}>
        <Text>
          Đăng xuất
        </Text>
        <Text>{userInfo.username}</Text>

      </Pressable>
    </SafeAreaView>

  )
}

export default Setting;