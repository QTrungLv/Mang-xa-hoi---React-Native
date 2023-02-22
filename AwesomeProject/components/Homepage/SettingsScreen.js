import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

const SettingSectionTitle = styled.Text`
  font-size: 12px;
  color: #8e8e93;
  margin-left: 16px;
  margin-top: 20px;
`;

const SettingsOption = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: 16px;
  margin-right: 16px;
  margin-top: 15px;
  margin-bottom: 15px;
  height: 40px;
  border-bottom-width: 0.5px;
  border-color: #c8c7cc;
`;

const SettingsOptionLabel = styled.Text`
  font-size: 16px;
  color: #000000;
  margin-left: 10px;
`;



const SettingsScreen = ({ navigation }) => {

  useEffect(() => {
    getToken()
  }, [])

  const [token, setToken] = useState()

  const getToken = async () => {

    const value = await AsyncStorage.getItem("@UserToken")

    if (value != null) {
      setToken(value)
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
      navigation.navigate("SignIn")
  }

  return (
    <>
      <SettingSectionTitle>Cài đặt</SettingSectionTitle>

      <SettingsOption>
        <Icon name="info-outline" size={30} color="#1877f2" />
        <SettingsOptionLabel onPress={() => navigation.navigate("PersonalPage")}>Trang cá nhân</SettingsOptionLabel>
        <Icon name="keyboard-arrow-right" size={30} color="#c7c7cc" />
      </SettingsOption>
      <SettingsOption onPress={handleLogout}>
        <Icon name="lock-outline" size={30} color="#1877f2" />
        <SettingsOptionLabel>Đăng xuất</SettingsOptionLabel>
        <Icon name="keyboard-arrow-right" size={30} color="#c7c7cc" />
      </SettingsOption>
    </>
  );
};
export default SettingsScreen;
