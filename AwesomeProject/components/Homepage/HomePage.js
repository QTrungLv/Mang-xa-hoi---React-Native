
import React, { useRef } from 'react';
import styled from 'styled-components/native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { View, ScrollView, TouchableOpacity, Pressable } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet'
import axios from 'axios';
import Feed from '../Post/Feed';
import { getToken } from '../../utils/Token';
import { useEffect } from 'react';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { GET_INFO } from '../../redux/actions/actionTypes';
const ContainerAppBar = styled.View`
  width: 100%;
  height: 58px;
  padding: 0 11px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
const TextAppBar = styled.Text`
  color: #3a86e9;
  font-size: 25px;
  font-weight: bold;
  letter-spacing: -0.3px;
`;
const RowAppBar = styled.View`
  flex-direction: row;
`;
const ButtonAppBar = styled.TouchableOpacity`
  width: 42px;
  height: 42px;
  border-radius: 21px;
  background: #eeeeee;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
`;
const ContainerToolBar = styled.View`
  width: 100%;
  height: 92px;
`;
const RowToolBar = styled.Pressable`
  flex-direction: row;
  background: #ffffff;
  width: 100%;
  padding: 0 11px;
  align-items: center;
`;
const Input = styled.TextInput`
  height: 50px;
  width: 100%;
  padding: 0 8px;
`;
const Divider = styled.View`
  width: 100%;
  height: 0.5px;
  background: #f0f0f0;
`;
const Menu = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 42px;
`;
const MenuText = styled.Text`
  padding-left: 11px;
  font-weight: 500;
  font-size: 12px;
`;
const SeparatorToolBar = styled.View`
  width: 1px;
  height: 26px;
  background: #f0f0f0;
`;

const BottomDivider = styled.View`
  width: 100%;
  height: 9px;
  background: #f0f2f5;
`;

const RowDetails = styled.View`
  align-items: center;
  flex-direction: row;
`;
const TextDetails = styled.Text`
  font-size: 13px;
  color: #424040;
`;
const ContainerAvatar = styled.View`
	width: 40px;
	height: 40px;
	position: relative;
`
const UserAvatar = styled.Image`
	width: 40px;
	height: 40px;
	border-radius: 20px;
	border-color: #1777f2;
	border-width: ${props => (props.story ? '3px' : 0)};
`
const UserActive = styled.View`
	width: 15px;
	height: 15px;
	border-radius: 8px;
	background: #4bcb1f;
	position: absolute;
	bottom: -2px;
	right: -2px;
	border-width: 2px;
	border-color: #ffffff;
`


export default function HomePage({ navigation }) {

  const dispatch = useDispatch()

  const [dataPost, setDataPost] = useState()
  const [token, setToken] = useState("")


  const getToken = async () => {

    const value = await AsyncStorage.getItem("@UserToken")

    if (value != null) {
      setToken(value)

    }
  }

  useEffect(() => {
    const getInfoUser = async () => {
      let api = `http://10.0.2.2:8000/api/personal/infoUser/1?token=${token}`
      await axios.get(api)
        .then((res) => {
          console.log(token)
          const userInfo = {
            user_id: res.data.data.id,
            avatar: res.data.data.avatar,
            username: res.data.data.username
          }
          console.log("UserInfo: ", userInfo)
          dispatch({
            type: GET_INFO,
            payload: userInfo
          })

        })
        .catch((err) => {
          console.log("error:", err)
        })
    }
    getToken()
    getInfoUser()
  }, [])

  useEffect(() => {

    const getListPost = async () => {
      //const axios = Headers(token)
      let api = `http://10.0.2.2:8000/api/post/?token=${token}&user_id`
      console.log(api)
      await axios
        .get(api)
        .then((res) => {
          console.log(res.data.data.post)
          setDataPost(res.data.data.post)
        })
        .catch((err) => {
        })
    }
    getToken()
    getListPost()
  }, [])



  const Avatar = ({ source, online, story }) => {
    return (
      <ContainerAvatar>
        <UserAvatar source={source} story={story} />
        {online && <UserActive />}
      </ContainerAvatar>
    )
  }

  const AppBar = () => {
    return (
      <ContainerAppBar>
        <TextAppBar>facebook</TextAppBar>
        <RowAppBar>
          <ButtonAppBar>
            <Feather name="search" size={29} color="black" />
          </ButtonAppBar>

          <ButtonAppBar>
            <MaterialCommunityIcons name="facebook-messenger" size={29} />
          </ButtonAppBar>
        </RowAppBar>
      </ContainerAppBar>
    );
  };


  const ToolBar = () => {
    return (
      <View onPress={() => navigation.navigate("MakePost")}>
        <ContainerToolBar>
          <RowToolBar onPress={() => navigation.navigate("MakePost")}>
            <Avatar source={require('../../assets/user1.jpg')} />
            <Input placeholder="What's on your mind?" onPress={() => navigation.navigate("MakePost")} />
          </RowToolBar>
          <Divider />
          <RowToolBar>
            <Menu>
              <MaterialCommunityIcons name="post" size={22} color="#F44337" />
              <MenuText onPress={() => { navigation.navigate("MakePost") }}>Make Post</MenuText>
            </Menu>
            <SeparatorToolBar />

            <Menu>
              <MaterialIcons
                name="photo-size-select-actual"
                size={20}
                color="#4CAF50"
              />
              <MenuText>Photo</MenuText>
            </Menu>
            <SeparatorToolBar />


          </RowToolBar>
        </ContainerToolBar>
        <BottomDivider />
      </View>
    );
  };



  const handleOption1 = () => {

  }

  const handleOption2 = () => {

  }
  const handleOption3 = () => {

  }


  return (

    <ScrollView style={{ flex: 1, backgroundColor: "#F5FCFF" }}>
      <AppBar />
      <ToolBar />

      {
        dataPost ? dataPost.map((item) => {
          return (
            <View key={item.id}>
              <Feed postDetails={item} />
            </View>

          )

        }) : <></>
      }
    </ScrollView>
  )
}