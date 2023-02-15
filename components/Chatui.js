import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Container = styled.View`
  flex: 1;
  background-color: #f2f5f8;
  padding: 20px;
`;

const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 20px;
  margin-left: 10px;
`;

const HeaderText = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
const TopContainer = styled.View`
  background-color: #e1e1e1;
  border-radius: 10px;
  padding: 20px;
  flex-direction: row;
  align-items: center;
`;
const ChatContainer = styled.View`
  flex: 1;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
`;

const MessageContainer = styled.View`
  flex-direction: row;
  align-self: ${props => (props.isUser ? 'flex-end' : 'flex-start')};
  margin-bottom: 20px;
`;

const MessageBubble = styled.View`
  background-color: ${props => (props.isUser ? '#1e90ff' : '#d3d3d3')};
  padding: 10px 20px;
  border-radius: 25px;
  max-width: 70%;
`;

const MessageText = styled.Text`
  font-size: 16px;
  color: ${props => (props.isUser ? '#fff' : '#000')};
`;

const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border-top-width: 1px;
  border-top-color: #e6e6e6;
`;

const Input = styled.TextInput`
  flex: 1;
  height: 40px;
  background-color: #f2f2f2;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 16px;
  color: #333;
  margin-right: 20px;
`;

const SendButton = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  background-color: #fff;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

const ChatUI = () => {
  return (
    <Container>
      <TopContainer>
        <Ionicons name="chevron-back-sharp" size={34} color="#1e90ff" />

        <Avatar source={{uri: 'https://picsum.photos/50'}} />
        <HeaderText>User Name</HeaderText>
        <Entypo
          name="phone"
          size={30}
          color="#1e90ff"
          style={{marginLeft: 20}}
        />

        <FontAwesome
          name="info-circle"
          size={30}
          color="#1e90ff"
          style={{marginLeft: 20}}
        />
      </TopContainer>
      <ChatContainer>
        <HeaderContainer></HeaderContainer>
        <MessageContainer>
          <MessageBubble>
            <MessageText isUser={false}>Hi, how are you?</MessageText>
          </MessageBubble>
        </MessageContainer>
        <MessageContainer isUser={true}>
          <MessageBubble isUser={true}>
            <MessageText isUser={true}>
              I'm good, thanks. How about you?
            </MessageText>
          </MessageBubble>
        </MessageContainer>
        <MessageContainer>
          <MessageBubble>
            <MessageText isUser={false}>
              I'm doing well, thanks for asking!
            </MessageText>
          </MessageBubble>
        </MessageContainer>
      </ChatContainer>
      <InputContainer>
        <Input />
        <SendButton>
          <Ionicons name="md-send" size={28} color="#1e90ff" />
        </SendButton>
      </InputContainer>
    </Container>
  );
};

export default ChatUI;
