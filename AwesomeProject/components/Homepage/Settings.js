import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Pressable, Text } from 'react-native'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  user: state.user
})

const Setting = (props) => {

  const [token, setToken] = useState("")

  useEffect(() => {
    getToken()
  }, [])

  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem("@UserToken")

      if (value != null) {
        setToken(value)
        console.log("Value: ", value)
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
    <Pressable style={{ alignSelf: "flex-start", padding: 10, borderWidth: 1, borderColor: "#000", backgroundColor: "lightgray" }} onPress={handleLogout}>
      <Text>
        {token}
      </Text>
      <Text>{props.user.name}</Text>
      
    </Pressable>
  )
}

export default connect(mapStateToProps, null)(Setting);