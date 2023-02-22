import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';

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
const ChatContainer = styled.ScrollView`
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

const ChatUI = ({ navigation }) => {
  const userInfo = useSelector(state => state.user)
  return (
    <Container>
      <TopContainer>

        <Ionicons name="chevron-back-sharp" size={34} color="#1e90ff" onPress={() => navigation.goBack()} />

        <Avatar source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/okggggg-fc02e.appspot.com/o/5%2FImage%2Favatar.jfif?alt=media&token=8b3d74bc-baa1-4a59-ac91-15da2a7bb4ca' }} />
        <HeaderText>Quang Trung</HeaderText>
        <Entypo
          name="phone"
          size={30}
          color="#1e90ff"
          style={{ marginLeft: 20 }}
        />

        <FontAwesome
          name="info-circle"
          size={30}
          color="#1e90ff"
          style={{ marginLeft: 20 }}
        />
      </TopContainer>
      <ChatContainer>
        <HeaderContainer></HeaderContainer>
        <ScrollView>
          <MessageContainer isUser={true}>
            <MessageBubble isUser={true}>
              <MessageText isUser={true}>
                Đâu phải làm những phần nào thế bạn?
              </MessageText>
            </MessageBubble>
          </MessageContainer>
          <MessageContainer>
            <MessageBubble>
              <MessageText isUser={false}>Mục 1 phần 2</MessageText>
            </MessageBubble>
          </MessageContainer>
          <MessageContainer>
            <MessageBubble>
              <MessageText isUser={false}>Các mục này nhé:</MessageText>
            </MessageBubble>
          </MessageContainer>
          <MessageContainer>
            <MessageBubble>
              <MessageText isUser={false}>Mục 1 phần 2</MessageText>
            </MessageBubble>
          </MessageContainer>
          <MessageContainer>
            <MessageBubble>
              <MessageText isUser={false}>Mục 2 phần 3</MessageText>
            </MessageBubble>
          </MessageContainer>
          <MessageContainer>
            <MessageBubble>
              <MessageText isUser={false}>Làm đi nhé</MessageText>
            </MessageBubble>
          </MessageContainer>
          <MessageContainer isUser={true}>
            <MessageBubble isUser={true}>
              <MessageText isUser={true}>
                Oke, chắc mấy hôm nữa xong
              </MessageText>
            </MessageBubble>
          </MessageContainer>
          <MessageContainer>
            <MessageBubble>
              <MessageText isUser={false}>
                Bài tập Ui/Ux làm đến đâu rồi bạn?
              </MessageText>
            </MessageBubble>
          </MessageContainer>
        </ScrollView>
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
