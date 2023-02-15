
import React, { useRef } from 'react';
import styled from 'styled-components/native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { View, ScrollView, TouchableOpacity } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet'
import axios from 'axios';
import Feed from '../Post/Feed';
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
const RowToolBar = styled.View`
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


export default function HomePage() {

  const refRBSheet = useRef();

  const getListPost = async () => {
    await axios.post("")
  }

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
      <>
        <ContainerToolBar>
          <RowToolBar>
            <Avatar source={require('../../assets/user1.jpg')} />
            <Input placeholder="What's on your mind?" />
          </RowToolBar>
          <Divider />
          <RowToolBar>
            <Menu>
              <Ionicons name="ios-videocam" size={22} color="#F44337" />
              <MenuText>Live</MenuText>
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

            <Menu>
              <MaterialCommunityIcons
                name="video-plus"
                size={22}
                color="#E141FC"
              />
              <MenuText>Room</MenuText>
            </Menu>
          </RowToolBar>
        </ContainerToolBar>
        <BottomDivider />
      </>
    );
  };



  const handleOption1 = () => {

  }

  const handleOption2 = () => {

  }
  const handleOption3 = () => {

  }


  return (

    <ScrollView style={{ flex: 1 }}>
      <AppBar />
      <ToolBar />
      <Feed postDetails={{ username: "Quang Trung", time: "No", postContent: "Yes", likeCount: 3, isLike: true, commentCount: 10 }} />

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            // backgroundColor: 'transparent-black',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        <TouchableOpacity onPress={handleOption1}>
          <RowDetails>
            <Entypo name="bell" size={30} style={{ margin: 10 }} />
            <TextDetails
              style={{
                fontSize: 20,
                fontFamily: 'Cochin',
                fontWeight: 'bold',
              }}>
              Tắt thông báo cho bài viết này
            </TextDetails>
          </RowDetails>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleOption2}>
          <RowDetails>
            <MaterialIcons name="edit" size={30} style={{ margin: 10 }} />
            <TextDetails
              style={{
                fontSize: 20,
                fontFamily: 'Cochin',
                fontWeight: 'bold',
              }}>
              Chỉnh sửa bài viết
            </TextDetails>
          </RowDetails>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleOption3}>
          <RowDetails>
            <AntDesign name="delete" size={30} style={{ margin: 10 }} />
            <TextDetails
              style={{
                fontSize: 20,
                fontFamily: 'Cochin',
                fontWeight: 'bold',
              }}>
              Xóa bài viết
            </TextDetails>
          </RowDetails>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => refRBSheet.current.close()}>
          <RowDetails>
            <AntDesign name="closecircleo" size={30} style={{ margin: 10 }} />
            <TextDetails
              style={{
                fontSize: 20,
                fontFamily: 'Cochin',
                fontWeight: 'bold',
              }}>
              Đóng
            </TextDetails>
          </RowDetails>
        </TouchableOpacity>
      </RBSheet>
    </ScrollView>
  )
}