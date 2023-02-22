import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { FlatList } from 'react-native';
import axios from 'axios';
import { Header } from '../../utils/Header';
import styled from 'styled-components/native';
import Feed from '../Post/Feed';
import Feather from 'react-native-vector-icons/Feather';

import AsyncStorage from '@react-native-async-storage/async-storage';

const SearchPost = () => {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);
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

    // Perform search and update searchResults state

    const getSearchPost = async () => {
      const axios = Header(token);
      await axios
        .get(
          'http://10.0.2.2:8000/api/post?token=abc&keyword=' +
          text +
          '&user_id='
        )
        .then(res => {
          setPosts(res.data.data.post);
          console.log(posts);

          console.log('//////////////');
        })
        .catch(err => {
          console.log('//////////////11111');
          console.log(err.response.data);
        });
    };
    getSearchPost();
  };

  return (
    <>
      <SearchContainer>
        <Feather name="search" size={29} color="black" />
        <Input
          placeholder="Nhập từ khóa để tìm kiếm bài viết. (^.^)"
          value={searchText}
          onChangeText={handleSearch}
        />
      </SearchContainer>
      <Divider></Divider>
      <ScrollView>
        {posts ? (
          posts.map((post, index) => {
            const postDetails = {
              author: post.author,
              image: post.image,
              described: post.described,
              like: post.like,
              comment: post.comment,
              is_liked: post.is_liked,
              is_block: post.is_block,
            };
            return <Feed postDetails={postDetails} />;
          })
        ) : (
          <Text>Loading...</Text>
        )}
      </ScrollView>
    </>
  );
};

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

export default SearchPost;
