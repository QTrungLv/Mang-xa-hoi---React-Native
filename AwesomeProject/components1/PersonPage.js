import React from 'react';

import styled from 'styled-components/native';

import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AppBar from './AppBar';
import {ScrollView} from 'react-native-gesture-handler';
import Avatar from './Avatar';

const PersonPage = () => {
  return (
    <>
      <AppBar />
      <Photo source={require('../assets/story3.jpg')} />
      <Avatar source={require('../assets/user1.jpg')} />
    </>
  );
};

const Container = styled.View`
  width: 100%;
  height: 58px;
  padding: 0 11px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
const Text = styled.Text`
  color: #3a86e9;
  font-size: 25px;
  font-weight: bold;
  letter-spacing: -0.3px;
`;
const Row = styled.View`
  flex-direction: row;
`;
const Photo = styled.Image`
  width: 100%;
  height: 150px;
`;
const Button = styled.TouchableOpacity`
  width: 42px;
  height: 42px;
  border-radius: 21px;
  background: #eeeeee;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
`;
export default PersonPage;
