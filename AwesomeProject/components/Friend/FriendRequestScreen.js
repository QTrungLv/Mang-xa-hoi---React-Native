import React from 'react';
import styled from 'styled-components/native';
import { Header } from '../../utils/Header';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import Dialog from 'react-native-dialog';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;

const HeaderTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const FriendRequestContainer = styled.View`
  padding: 25px;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
  flex-direction: row;
  align-items: center;
`;

const FriendRequestAvatar = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-right: 15px;
`;

const FriendRequestName = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
`;

const ButtonAcp = styled.TouchableOpacity`
  height: 44px;
  width: 110px;
  padding: 1px;
  align-item: center;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  background-color: #1877f2;
`;
const ButtonReject = styled.TouchableOpacity`
  height: 44px;
  width: 110px;
  margin-left: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: #ddd;
`;

const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: 'white';
`;

const FriendRequestScreen = () => {
  const [requestFriend, setRequestFriend] = useState();
  const [message, setMessage] = useState('Đã xảy ra lỗi');
  const [visible, setVisible] = useState(false);

  const [token, setToken] = useState("")

  useEffect(() => {
    const getToken = async () => {

      const value = await AsyncStorage.getItem("@UserToken")

      if (value != null) {
        setToken(value)

      }
    }
    getToken()
  }, [])

  const axios = Header(token);

  useEffect(() => {
    const getRequestFriend = async () => {

      await axios
        .get('http://10.0.2.2:8000/api/relation/requested?token=abc')
        .then(res => {
          setRequestFriend(res.data.data);
          console.log(requestFriend);

          console.log('//////////////');
          // const qwrequest = res.data.data;
          // request.map((req, index) => {
          //   req.visiable = true;
          // });
          // setRequestFriend(request);
          console.log(requestFriend);
        })
        .catch(err => {
          console.log('11111111111111111');
          console.log(err);
        });
    };
    getRequestFriend();
  }, [token]);

  const handleAccept = request => {
    const setAcp = async () => {
      await axios
        .post('http://10.0.2.2:8000/api/relation/accept', {
          token: 'hgelloa',
          user_id: request.id,
          is_accept: 1,
        })
        .then(res => {
          console.log('Ket ban thanh cong');
          setVisible(true);
          if ((res.data.success = true)) setMessage('Kết bạn thành công');
        })
        .catch(err => {
          console.log('Da xay ra loi');
          setMessage('Đã xảy ra lỗi');
          setVisible(true);
          console.log(err);
        });
      request.visiable = false;
    };
    setAcp();

    console.log(`Accept friend request ${request.id}`);
  };

  const handleReject = request => {
    const setReject = async () => {
      await axios
        .post('http://10.0.2.2:8000/api/relation/accept', {
          token: 'hgelloa',
          user_id: request.id,
          is_accept: 0,
        })
        .then(res => {
          console.log(res.data.success);
          setVisible(true);
          if ((res.data.success = true)) setMessage('Xóa lời mời thành công');
        })
        .catch(err => {
          setMessage('Đã xảy ra lỗi');
          setVisible(true);
          console.log('Khong oke');

          console.log(err.response.data);
        });
      request.visiable = false;
    };
    setReject();
    console.log(`Reject friend request ${request.id}`);
  };

  return (
    <Container>
      <HeaderContainer>
        <HeaderTitle>Friend Requests</HeaderTitle>

        <Text style={{ color: '#1877f2', fontWeight: 'bold', fontSize: 16 }}>
          {requestFriend ? (
            requestFriend.length + ' yêu cầu'
          ) : (
            <Text>Loading...</Text>
          )}
        </Text>
      </HeaderContainer>
      <ScrollView>
        {requestFriend ? (
          requestFriend.map((request, index) => {
            return (
              <FriendRequestContainer
                key={request.id}
              // style={{ display: request.visiable ? 'flex' : 'none' }}
              >
                <FriendRequestAvatar source={{ uri: request.avatar }} />
                <View>
                  <FriendRequestName>
                    {request.first_name + ' ' + request.last_name}
                  </FriendRequestName>
                  <ButtonContainer>
                    <ButtonAcp onPress={() => handleAccept(request)}>
                      <ButtonText style={{ color: 'white' }}>Accept</ButtonText>
                    </ButtonAcp>
                    <ButtonReject onPress={() => handleReject(request)}>
                      <ButtonText>Delete</ButtonText>
                    </ButtonReject>
                  </ButtonContainer>
                </View>
              </FriendRequestContainer>
            );
          })
        ) : (
          <Text>Loading...</Text>
        )}
      </ScrollView>
      <Dialog.Container visible={visible}>
        <Dialog.Title> Thông tin</Dialog.Title>
        <Dialog.Description>{message}</Dialog.Description>
        <Dialog.Button label="OK" onPress={async () => {
          setVisible(false)
          await axios
            .get('http://10.0.2.2:8000/api/relation/requested?token=abc')
            .then(res => {
              setRequestFriend(res.data.data);
              console.log(requestFriend);

              console.log('//////////////');
              // const qwrequest = res.data.data;
              // request.map((req, index) => {
              //   req.visiable = true;
              // });
              // setRequestFriend(request);
              console.log(requestFriend);
            })
            .catch(err => {
              console.log('11111111111111111');
              console.log(err);
            });
        }} />
      </Dialog.Container>
    </Container>
  );
};

export default FriendRequestScreen;
