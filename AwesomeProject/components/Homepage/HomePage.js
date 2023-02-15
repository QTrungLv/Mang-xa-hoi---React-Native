
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

const Container = styled.View`
  flex: 1;
`;
const Header = styled.View`
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 6px;
  padding: 0 11px;
`;
const Row = styled.View`
  align-items: center;
  flex-direction: row;
`;
const User = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #222121;
`;
const Time = styled.Text`
  font-size: 9px;
  color: #747476;
`;
const Post = styled.Text`
  font-size: 12px;
  color: #222121;
  line-height: 16px;
  padding: 0 11px;
`;
const Photo = styled.Image`
  margin-top: 9px;
  width: 100%;
  height: 300px;
`;
const Footer = styled.View`
  padding: 0 11px;
`;
const FooterCount = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 9px 0;
`;
const IconCount = styled.View`
  background: #1878f3;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-right: 6px;
`;
const TextCount = styled.Text`
  font-size: 11px;
  color: #424040;
`;
const Separator = styled.View`
  width: 100%;
  height: 1px;
  background: #f9f9f9;
`;
const FooterMenu = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 9px 0;
`;
const Button = styled.TouchableOpacity`
  flex-direction: row;
`;
const Iconwrap = styled.View`
  margin-right: 6px;
`;
const Text = styled.Text`
  font-size: 12px;
  color: #424040;
`;
const BottomDivider = styled.View`
  width: 100%;
  height: 9px;
  background: #f0f2f5;
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

const RowDetails = styled.View`
  align-items: center;
  flex-direction: row;
`;
const TextDetails = styled.Text`
  font-size: 13px;
  color: #424040;
`;



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

  const Feed = ({ postDetails = null }) => {
    const { username, time, postContent, likeCount, isLike, commentCount } =
      postDetails;
    return (
      <>
        <Container>
          <Header>
            <Row>
              <Avatar source={require('../../assets/user3.jpg')} />
              <View style={{ paddingLeft: 10 }}>
                <User>{username}</User>
                <Row>
                  <Time>{time}</Time>
                  <Entypo name="dot-single" size={12} color="#747476" />
                  <FontAwesome name="globe" size={10} color="#747476" />
                </Row>
              </View>
            </Row>

            <TouchableOpacity onPress={() => refRBSheet.current.open()}>
              <Entypo name="dots-three-horizontal" size={15} color="#222121" />
            </TouchableOpacity>
          </Header>

          <Post>{postContent}</Post>
          <Photo source={require('../../assets/post3.jpg')} />

          <Footer>
            <FooterCount>
              <Row>
                <IconCount>
                  <AntDesign name="like1" size={12} color="#FFFFFF" />
                </IconCount>
                <TextCount>{likeCount} likes</TextCount>
              </Row>
              <TextCount>{commentCount} comments</TextCount>
            </FooterCount>

            <Separator />

            <FooterMenu>
              <Button>
                <Iconwrap>
                  <AntDesign
                    name="like2"
                    size={20}
                    color={isLike ? '#6495ED' : '#424040'}
                  />
                </Iconwrap>
                <Text>Like</Text>
              </Button>

              <Button>
                <Iconwrap>
                  <MaterialCommunityIcons
                    name="comment-outline"
                    size={20}
                    color="#424040"
                  />
                </Iconwrap>
                <Text>Comment</Text>
              </Button>

              <Button>
                <Iconwrap>
                  <MaterialCommunityIcons
                    name="share-outline"
                    size={20}
                    color="#424040"
                  />
                </Iconwrap>
                <Text>Share</Text>
              </Button>
            </FooterMenu>
          </Footer>
          <BottomDivider />
        </Container>
      </>
    )
  }

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