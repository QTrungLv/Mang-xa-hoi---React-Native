import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 20px;
`;

const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

const HeaderText = styled.Text`
  font-size: 23px;
  font-weight: bold;
  margin-right: 180px;
`;

const ChatContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;

  padding: 10px;
  padding-left: 1px;
  margin-bottom: 20px;
`;

const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 20px;
`;

const ChatInfo = styled.View`
  flex: 1;
`;

const ChatName = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

const ChatMessage = styled.Text`
  font-size: 14px;
  color: #8c8c8c;
`;
const SearchContainer = styled.View`
  background-color: #f2f5f8;
  border-radius: 13px;
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
  padding: 1px;
`;

const SearchInput = styled.TextInput`
  width: 2500px;
  font-size: 14px;
`;
const SearchIconContainer = styled.TouchableOpacity`
  padding: 10px;
`;
const FriendsRowContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;
const FriendsContainer = styled.TouchableOpacity`
  width: 50px;
  margin-right: 20px;
`;

const FriendAvatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border-width: 2px;
  border-color: #fff;
  margin-right: 20px;
`;

const FriendName = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

const ChatHomePage = () => {
  return (
    <Container>
      <HeaderContainer>
        <Avatar source={{uri: 'https://picsum.photos/41'}} />
        <HeaderText>Chats</HeaderText>
        <Entypo name="new-message" size={24} color="#1e90ff" />
      </HeaderContainer>
      <SearchContainer>
        <SearchIconContainer>
          <Feather name="search" size={20} color="#8c8c8c" />
        </SearchIconContainer>
        <SearchInput placeholder="Search" />
      </SearchContainer>
      <FriendsRowContainer>
        <FriendsContainer>
          <FriendAvatar source={{uri: 'https://picsum.photos/56'}} />
          <FriendName>Ngu Long</FriendName>
        </FriendsContainer>
        <FriendsContainer>
          <FriendAvatar source={{uri: 'https://picsum.photos/45'}} />
          <FriendName>Trần Trung</FriendName>
        </FriendsContainer>
        <FriendsContainer>
          <FriendAvatar source={{uri: 'https://picsum.photos/46'}} />
          <FriendName>Luynh Mạnh</FriendName>
        </FriendsContainer>
        <FriendsContainer>
          <FriendAvatar source={{uri: 'https://picsum.photos/48'}} />
          <FriendName>Trung Trần </FriendName>
        </FriendsContainer>
      </FriendsRowContainer>

      <ScrollView>
        <ChatContainer>
          <Avatar source={{uri: 'https://picsum.photos/54'}} />
          <ChatInfo>
            <ChatName>Nhóc 2k9</ChatName>
            <ChatMessage>Hi, how are you feel to day?</ChatMessage>
          </ChatInfo>
        </ChatContainer>
        <ChatContainer>
          <Avatar source={{uri: 'https://picsum.photos/53'}} />
          <ChatInfo>
            <ChatName>Con nợ</ChatName>
            <ChatMessage>Bao giờ có tiền trả bố?</ChatMessage>
          </ChatInfo>
        </ChatContainer>
        <ChatContainer>
          <Avatar source={{uri: 'https://picsum.photos/52'}} />
          <ChatInfo>
            <ChatName>Dme cuộc đời</ChatName>
            <ChatMessage>Cuối tuần về k?</ChatMessage>
          </ChatInfo>
        </ChatContainer>
        <ChatContainer>
          <Avatar source={{uri: 'https://picsum.photos/51'}} />
          <ChatInfo>
            <ChatName>User Name</ChatName>
            <ChatMessage>Hi, how are you?</ChatMessage>
          </ChatInfo>
        </ChatContainer>
      </ScrollView>
    </Container>
  );
};

export default ChatHomePage;
