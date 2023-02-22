import React, { useEffect, useState } from 'react';
import goBack from '../../assets/icon/goback.png';
import styled from 'styled-components/native';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Pressable,
  Image,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import AppBar from './AppBar';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import { Header } from '../../utils/Header';
import Feed from '../Post/Feed';
import FeedDetails from '../Post/FeedDetails';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
  left: 50px;
  top: 90px;
`;
const CameraWrapper = styled.View`
  position: absolute;
  left: 350px;
  top: 100px;
`;
const CameraWrapper1 = styled.View`
  position: absolute;
  left: 130px;
  top: 150px;
`;
const Avatar = styled.Image`
  width: 110px;
  height: 110px;
  border-radius: 60px;
  border-color: #fff;
  border-width: 3.5px;
`;
const Camera = styled.Image`
  width: 34px;
  height: 34px;
  border-radius: 50px;
  border-color: #2196f3;
  border-width: 1.5px;
`;
const Camera1 = styled.Image`
  width: 33px;
  height: 33px;
  border-radius: 50px;
  border-color: #2196f3;
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

const Friend = styled.TouchableOpacity`
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

const PersonPage = ({ route, navigation }) => {
  const [friends, setFriends] = useState();
  const [username, setUsername] = useState();
  const [avatarUrl, setAvatarUrl] = useState();
  const [posts, setPosts] = useState();
  const [city, setCity] = useState();
  const [description, setDecription] = useState();
  const userId = '1';

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
    const axios = Header(token);
    const getFriendList = async () => {
      // const axios = Header(
      //   'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNjc2ODI2MDIwLCJleHAiOjE2NzY4Mjk2MjAsIm5iZiI6MTY3NjgyNjAyMCwianRpIjoieVhSRFJLeHh0U1BMcUlIMSIsInN1YiI6IjkiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.VlAzowbGU4uZASBZJwx6KpisdjZpwnD6sm4ixY9DVpU'
      // );

      const queryParams = `?user_id=${userId}`;
      await axios
        .get('http://10.0.2.2:8000/api/relation/friends' + queryParams)
        .then(res => {
          setFriends(res.data.data.friends);
          // console.log(res.data.data.friends);
        })
        .catch(err => {
          console.log(err);
        });
    };
    getFriendList();
    const getUserInfo = async () => {
      // const axios = Header(
      //   'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNjc2ODI2MDIwLCJleHAiOjE2NzY4Mjk2MjAsIm5iZiI6MTY3NjgyNjAyMCwianRpIjoieVhSRFJLeHh0U1BMcUlIMSIsInN1YiI6IjkiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.VlAzowbGU4uZASBZJwx6KpisdjZpwnD6sm4ixY9DVpU'
      // );
      await axios
        .get('http://10.0.2.2:8000/api/personal/infoUser/' + userId)
        .then(res => {
          const user = res.data.data;
          setUsername(user.username);
          setAvatarUrl(user.avatar);
          //setCoverURL(res.data.data.coverUrl);
          setCity(user.city);
          setDecription(user.description);
          console.log(avatarUrl);
        })
        .catch(err => {
          console.log(err);
        });
    };
    getUserInfo();
    const getUserPost = async () => {
      // const axios = Header(
      //   'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNjc2ODgyMjA3LCJleHAiOjE2NzY4ODU4MDcsIm5iZiI6MTY3Njg4MjIwNywianRpIjoidVlnWndKNDdPQTRVZ0xHbyIsInN1YiI6IjkiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.xwH8uuagA0r0uVli28bRCCXHsCRT6CTbXtNDl51CvWU'
      // );
      await axios
        .get('http://10.0.2.2:8000/api/post?token=abc&user_id=' + userId)
        .then(res => {
          setPosts(res.data.data.post);
          console.log(posts);
          console.log(posts[0].author.username);
          console.log('//////////////');
        })
        .catch(err => {
          console.log('//////////////11111');
          console.log(err);
        });
    };
    getUserPost();
  }, [token]);
  function handlerGoBack() {
    navigation.goBack();
  }
  return (
    <>
      <View style={styles.headerContainer}>
        <Pressable style={styles.goBackPosition} onPress={handlerGoBack}>
          <Image source={goBack} style={styles.iconGoBack} />
        </Pressable>
        <Text style={styles.headerText}>{username}</Text>
      </View>
      <ScrollView>
        {/* <AppBar /> */}
        <Photo
          source={{
            uri: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          }}
        />
        <AvatarWrapper>
          <Avatar source={{ uri: avatarUrl }} />
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
        <ButtonAddNew onPress={() => navigation.navigate("MakePost")}>
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
          style={{
            marginTop: 5,
            height: 10,
            backgroundColor: '#B4B4B4',
          }}></View>
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
            Sống tại {city}
          </Text>
        </Row>
        <Row style={{ marginLeft: 40, marginTop: 5 }} marg>
          <MaterialCommunityIcons name="format-quote-open" size={22} />
          <Text
            style={{
              fontSize: 17,
              color: '#000',
              fontFamily: 'Roboto',
              fontWeight: 'bold',
              marginLeft: 5,
            }}>
            {description}
          </Text>
        </Row>

        <FriendsSection>
          <FriendsSectionHeader>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Bạn bè</Text>
            {friends ? (
              <SeeAllText>{friends.length} người bạn </SeeAllText>
            ) : (
              <Text>Loading...</Text>
            )}
          </FriendsSectionHeader>
          <ScrollView
            horizontal={true}
            style={{ marginTop: 10, flexDirection: 'row' }}>
            {friends ? (
              friends.map((friend, index) => {
                return (
                  <Friend
                    key={index}
                    onPress={() =>
                      navigation.navigate('FriendPage', {
                        userId: friend.id,
                      })
                    }>
                    <FriendAvatar source={{ uri: friend.avatar }} />
                    <FriendNameText>{friend.username}</FriendNameText>
                  </Friend>
                );
              })
            ) : (
              <Text>Loading...</Text>
            )}
          </ScrollView>
        </FriendsSection>
        <View
          style={{
            marginTop: 5,
            height: 10,
            backgroundColor: '#B4B4B4',
          }}></View>
        <View>
          {posts ? (
            posts.map((post, index) => {
              const postDetails = {
                id: post.id,
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
        </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  headerText: {
    position: 'absolute',
    left: 72,
    fontSize: 20,
    color: '#000',
    fontWeight: '600',
  },
  iconGoBack: {
    width: 23,
    height: 23,
  },
  goBackPosition: {
    position: 'absolute',
    left: 18,
  },
});

export default PersonPage;
