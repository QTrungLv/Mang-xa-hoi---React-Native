import React from 'react';

import styled from 'styled-components/native';
import { Text, View, ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import AppBar from './AppBar';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
//import Feed from './Feed';


const Container = styled.View`
  width: 100%;
  height: 58px;
  padding: 0 11px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
const UserNameText = styled.Text`
  color: #000;
  font-size: 28px;
  font-weight: bold;
  margin-top: 38px;
  margin-left: 50px;
`;
const Row = styled.View`
  flex-direction: row;
`;
const Photo = styled.Image`
  width: 100%;
  height: 160px;
`;
const ButtonAddNew = styled.TouchableOpacity`
  width: 80%;
  height: 42px;
  border-radius: 10px;
  background: #2196f3;
  align-items: center;
  justify-content: center;
  margin-left: 40px;
`;
const Button = styled.TouchableOpacity`
  background-color: #dadada;
  width: ${props => props.width || 'auto'}px;
  height: ${props => props.height || 'auto'}px;
  padding: 10px;
  flex-direction: row;
  margin-left: ${props => props.left || 'auto'}px;
  margin-top: 5px;
  border-radius: 8px;
`;
const AvatarWrapper = styled.View`
  position: absolute;
  left: 40px;
  top: 150px;
`;
const CameraWrapper = styled.View`
  position: absolute;
  left: 340px;
  top: 150px;
`;
const CameraWrapper1 = styled.View`
  position: absolute;
  left: 126px;
  top: 208px;
`;
const Avatar = styled.Image`
  width: 110px;
  height: 110px;
  border-radius: 60px;
  border-color: #fff;
  border-width: 3.5px;
`;
const Camera = styled.Image`
  width: 35px;
  height: 35px;
  border-radius: 50px;
  border-color: #000;
  border-width: 1.5px;
`;
const Camera1 = styled.Image`
  width: 33px;
  height: 33px;
  border-radius: 50px;
  border-color: #000;
  border-width: 1.5px;
`;
const FriendsSection = styled.View`
  margin-top: 20px;
  padding: 10px;
`;

const FriendsSectionHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const SeeAllText = styled.Text`
  color: #2196f3;
  font-size: 16px;
`;

const FriendsList = styled.View`
  margin-top: 10px;
  flex-direction: row;
`;

const Friend = styled.View`
  margin-right: 20px;
  align-items: center;
`;

const FriendAvatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

const FriendNameText = styled.Text`
  margin-top: 10px;
  font-size: 16px;
`;


const PersonPage = ({ username, avatarUrl, coverUrl, address, email }) => {
  const friends = [
    { name: 'John Doe', profilePicture: 'https://picsum.photos/200' },
    { name: 'Jane Doe', profilePicture: 'https://picsum.photos/200' },
    { name: 'Jim Doe', profilePicture: 'https://picsum.photos/200' },
  ];
  return (
    <>
      <ScrollView>
        {/* <AppBar /> */}
        <Photo source={coverUrl} />
        <AvatarWrapper>
          <Avatar source={avatarUrl} />
        </AvatarWrapper>
        <CameraWrapper>
          <Camera
            source={require('../../assets/camera.jpg')}
            style={{ resizeMode: 'center' }}
          />
        </CameraWrapper>
        <CameraWrapper1>
          <Camera1
            source={require('../../assets/camera.jpg')}
            style={{ resizeMode: 'center' }}
          />
        </CameraWrapper1>
        <UserNameText>{username}</UserNameText>
        <ButtonAddNew>
          <Text style={{ fontSize: 15, color: 'white' }}>Thêm vào tin</Text>
        </ButtonAddNew>
        <Row>
          <Button width={250} height={40} left={41}>
            <FontAwesome
              name="pencil"
              size={20}
              color="#000000"
              fontWeight="bold"
            />
            <Text
              style={{
                fontSize: 15,
                color: '#000',
                fontFamily: 'Roboto',
                fontWeight: 'bold',
                marginLeft: 10,
              }}>
              Chỉnh sửa trang cá nhân
            </Text>
          </Button>
          <Button width={50} height={40} left={12}>
            <Entypo name="dots-three-horizontal" size={20} color="#000000" />
          </Button>
        </Row>
        <View
          style={{ marginTop: 5, height: 10, backgroundColor: '#B4B4B4' }}></View>
        <Text
          style={{
            fontSize: 23,
            color: '#000',
            fontFamily: 'Roboto',
            fontWeight: 'bold',
            marginLeft: 40,
          }}>
          Giới thiệu
        </Text>
        <Row style={{ marginLeft: 40, marginTop: 5 }} marg>
          <Entypo name="home" size={22} />
          <Text
            style={{
              fontSize: 17,
              color: '#000',
              fontFamily: 'Roboto',
              fontWeight: 'bold',
              marginLeft: 5,
            }}>
            Sống tại {address}
          </Text>
        </Row>
        {/* <Row style={{marginLeft: 40, marginTop: 5}} marg>
          <MaterialCommunityIcons name="email" size={22} />
          <Text
            style={{
              fontSize: 17,
              color: '#000',
              fontFamily: 'Roboto',
              fontWeight: 'bold',
              marginLeft: 5,
            }}>
            {email}
          </Text>
        </Row>
        <View
          style={{marginTop: 5, height: 3, backgroundColor: '#DEDEDE'}}></View>
        <Text
          style={{
            fontSize: 20,
            color: '#000',
            fontFamily: 'Roboto',
            fontWeight: 'bold',
            marginLeft: 40,
          }}>
          Bạn Bè
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: '#000',
            fontFamily: 'Roboto',

            marginLeft: 40,
          }}>
          200 bạn bè
        </Text> */}
        <FriendsSection>
          <FriendsSectionHeader>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Bạn bè</Text>
            <SeeAllText>Xem tất cả</SeeAllText>
          </FriendsSectionHeader>
          <FriendsList>
            {friends.map((friend, index) => (
              <Friend key={index}>
                <FriendAvatar source={{ uri: friend.profilePicture }} />
                <FriendNameText>{friend.name}</FriendNameText>
              </Friend>
            ))}
          </FriendsList>
        </FriendsSection>
      </ScrollView>
    </>
  );
};


///////



export default PersonPage;
