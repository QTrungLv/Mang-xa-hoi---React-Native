import AsyncStorage from "@react-native-async-storage/async-storage"

export const getToken = async () => {

  const value = await AsyncStorage.getItem("@UserToken")


  if (value != null) {
    return value
  }else{
    return null
  }

}