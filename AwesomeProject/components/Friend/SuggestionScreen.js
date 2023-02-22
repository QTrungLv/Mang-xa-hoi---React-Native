import React, { useEffect, useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import axios from 'axios';
import { Header } from '../../utils/Header';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SuggestScreen = () => {
  const [suggestedFriend, setSuggestedFriend] = useState();

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

  useEffect(() => {
    const getSuggestedFriend = async () => {
      const axios = Header(token);
      await axios
        .get('http://10.0.2.2:8000/api/relation/suggested?token=abc')
        .then(res => {
          setSuggestedFriend(res.data.data);
          console.log(suggestedFriend);

          console.log('//////////////');
        })
        .catch(err => {
          console.log('11111111111111111');
          console.log(err);
        });
    };
    getSuggestedFriend();
  }, [token]);
  return (
    <Container>
      <Title>Suggested Friends</Title>
      <ScrollView>
        {suggestedFriend ? (
          suggestedFriend.map((friend, index) => {
            return (
              <Card key={index}>
                <Avatar source={{ uri: friend.avatar }} />
                <Info>
                  <Name>{friend.username}</Name>
                  <TouchableOpacity>
                    <Button>Add Friend</Button>
                  </TouchableOpacity>
                </Info>
              </Card>
            );
          })
        ) : (
          <Text>Loading...</Text>
        )}
      </ScrollView>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin: 20px 0 10px 20px;
`;

const Card = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

const Avatar = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 55px;
  margin-right: 20px;
  margin-top: 10px;
`;

const Info = styled.View`
  flex: 1;
`;

const Name = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 5px;
  margin-right: 20px;
`;

const Button = styled.Text`
  background-color: #1877f2;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  margin-left: 20px;
  margin-right: 20px;
`;

export default SuggestScreen;
