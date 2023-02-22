import React, { useState, useEffect } from 'react';
import {
  FlatList,
  TextInput,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Header } from '../../utils/Header';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

const SearchUser = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState();
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

  const axios = Header(token)
  const handleSearch = text => {
    setSearchText(text);
    const getSearchUser = async () => {
      await axios
        .post(
          'http://10.0.2.2:8000/api/search/searchUser?token=abc&keyword=' +
          text +
          '&user_id='
        )
        .then(res => {
          setSearchResults(res.data.data.data);
          console.log(setSearchResults);

          console.log('OKKKK');
        })
        .catch(err => {
          console.log('Khong OKe');
          console.log(err.response.data);
        });
    };
    getSearchUser();
  };

  return (
    <Container>
      <SearchContainer>
        <Feather name="search" size={29} color="black" />
        <Input
          placeholder="Nhập từ khóa để tìm kiếm mọi người. (^.^)"
          value={searchText}
          onChangeText={handleSearch}
        />
      </SearchContainer>
      <Divider></Divider>
      <ScrollView>
        {searchResults ? (
          searchResults.map((search, index) => {
            return (
              <Card key={index}>
                <Avatar source={{ uri: search.avatar }} />
                <Info>
                  <Name>{search.username}</Name>
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
  padding: 20px;
`;

const SearchBar = styled.TextInput`
  height: 40px;
  margin-bottom: 20px;
  padding: 10px;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 5px;
`;

const ResultItem = styled.Text`
  font-size: 16px;
  padding: 10px;
`;
const SearchContainer = styled.View`
  background-color: #fff;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;
const Divider = styled.View`
  width: 100%;
  height: 9px;
  background: #f0f2f5;
`;
const Input = styled.TextInput`
  padding-left: 10px;
  font-size: 16px;
  border-radius: 20px;
  color: #666666;
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

export default SearchUser;
