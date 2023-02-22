import React, { useEffect, useRef, useState } from 'react';
import { View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import axios from 'axios';
import { Header } from '../../utils/Header';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RBSheet from 'react-native-raw-bottom-sheet';
import Comment from './Comment';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Container = styled.ScrollView`
  flex: 1;
`;
const HeaderContainer = styled.View`
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 6px;
  padding: 0 11px;
`;
const Row = styled.View`
  align-items: center;
  flex-direction: row;
`;
const User = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #222121;
  font-family: Roboto;
`;
const Time = styled.Text`
  font-size: 9px;
  color: #747476;
  font-family: Roboto;
`;
const Post = styled.Text`
  font-size: 12px;
  color: #222121;
  line-height: 16px;
  padding: 0 11px;
  font-family: Roboto;
`;
const Photo = styled.Image`
  margin-top: 9px;
  width: 100%;
  height: 300px;
`;
const Footer = styled.View`
  padding: 0 11px;
`;
const FooterCount = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 9px 0;
`;
const IconCount = styled.View`
  background: #1878f3;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-right: 6px;
`;
const TextCount = styled.Text`
  font-size: 11px;
  color: #424040;
`;
const Separator = styled.View`
  width: 100%;
  height: 1px;
  background: #f9f9f9;
`;
const FooterMenu = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 9px 0;
`;
const Button = styled.TouchableOpacity`
  flex-direction: row;
`;
const Iconwrap = styled.View`
  margin-right: 6px;
`;
const Text = styled.Text`
  font-size: 13px;
  color: #424040;
`;
const TextComment = styled.Text`
  font-size: 13px;
  color: #424040;
  font-weight: bold;
`;

const BottomDivider = styled.View`
  width: 100%;
  height: 9px;
  background: #f0f2f5;
`;
const AvatarComment = styled.View`
  margin-top: 10px;
  margin-right: 5px;
`;
const ContainerAvatar = styled.View`
  width: 40px;
  height: 40px;
  position: relative;
`;
const UserAvatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border-color: #1777f2;
  border-width: ${props => (props.story ? '3px' : 0)};
`;
const UserActive = styled.View`
  width: 15px;
  height: 15px;
  border-radius: 8px;
  background: #4bcb1f;
  position: absolute;
  bottom: -2px;
  right: -2px;
  border-width: 2px;
  border-color: #ffffff;
`;

const FeedDetails = ({ route, navigation }) => {
  const refRBSheet = useRef();
  const [post, setPost] = useState();
  const [avatarUrl, setAvatarUrl] = useState();
  const [reload, setReload] = useState(1);
  const [comment, setComment] = useState();
  const [writecomment, setWriteComment] = useState();
  const [isLike, setIsLike] = useState(true)
  const [countLike, setCountLike] = useState(0)
  const [image, setImage] = useState()

  const postId = route.params.post_id;
  console.log("ID: ", postId)
  const userId = useSelector(state => state.user).user_id;

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
    const getPost = async () => {
      await axios
        .get('http://10.0.2.2:8000/api/post/' + postId + '?token=eyJ0')
        .then(res => {
          setPost(res.data.data);
          setImage(post.image)
          console.log("Post: ", res.data.data)
          //console.log(post);
          setIsLike(post.is_Like)
          setCountLike(post.comment)
          //console.log(post[0].author.username);
          console.log('OKKKKKKKKKK');
        })
        .catch(err => {
          console.log('KHONG OKE');
          console.log(err);
        });
    };
    getPost();
    const getComment = async () => {
      await axios
        .get('http://10.0.2.2:8000/api/comment/' + postId + '?token=eyJ0')
        .then(res => {
          setComment(res.data.data.data);
          //console.log(comment);
          //console.log(post[0].author.username);
          console.log('Comment OKKKKKKKKK');
        })
        .catch(err => {
          console.log('KHONG OKE');
          console.log(err);
        });
    };
    getComment();
    const getUserInfo = async () => {
      // const axios = Header(
      //   'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNjc2ODI2MDIwLCJleHAiOjE2NzY4Mjk2MjAsIm5iZiI6MTY3NjgyNjAyMCwianRpIjoieVhSRFJLeHh0U1BMcUlIMSIsInN1YiI6IjkiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.VlAzowbGU4uZASBZJwx6KpisdjZpwnD6sm4ixY9DVpU'
      // );
      await axios
        .get('http://10.0.2.2:8000/api/personal/infoUser/' + userId)
        .then(res => {
          const user = res.data.data;

          setAvatarUrl(user.avatar);
          //setCoverURL(res.data.data.coverUrl);
        })
        .catch(err => {
          console.log(err);
        });
    };
    getUserInfo();
  }, [token]);

  const CreateComment = async () => {
    await axios
      .post(
        'http://10.0.2.2:8000/api/comment/store?token=eyJ0&post_id=' +
        postId +
        '&comment=' +
        writecomment +
        '&user_id=1'
      )
      .then(res => {
        const rl = reload;

        axios
          .get('http://10.0.2.2:8000/api/comment/' + postId + '?token=eyJ0')
          .then(res => {
            //console.log(comment);
            setComment(res.data.data.data);

            //console.log(post[0].author.username);
          })
          .catch(err => {
            console.log('KHONG OKE');
            console.log(err);
          });
        console.log('Write Comment OKKKKKKKKK');
      })
      .catch(err => {
        console.log('KHONG OKE');
        console.log(err);
      });
  };

  const handleLike = async () => {
    await axios.post(`http://10.0.2.2:8000/api/post/likePost/${postId}?token=${token}`)
      .then((res) => {
        setIsLike(res.data.data.is_like)
        setCountLike(res.data.data.like)
      })
  }

  const Avatar = ({ source, online, story }) => {
    return (
      <ContainerAvatar>
        <UserAvatar source={source} story={story} />
        {online && <UserActive />}
      </ContainerAvatar>
    );
  };
  return (
    <>
      <Container>
        <HeaderContainer>
          <Row>
            {post ? (
              <Avatar source={{ uri: post.author.avatar }} />
            ) : (
              <Text> Loading...</Text>
            )}
            <View style={{ paddingLeft: 10 }}>
              {post ? (
                <User>{post.author.username}</User>
              ) : (
                <Text> Loading...</Text>
              )}

              <Row>
                <Time>3h</Time>
                <Entypo name="dot-single" size={12} color="#747476" />
                <FontAwesome name="globe" size={10} color="#747476" />
              </Row>
            </View>
          </Row>

          <TouchableOpacity onPress={() => refRBSheet.current.open()}>
            <Entypo name="dots-three-horizontal" size={15} color="#222121" />
          </TouchableOpacity>
        </HeaderContainer>
        {post ? <Post>{post.described}</Post> : <Text> Loading...</Text>}

        {post ? <Photo source={{ uri: post.image[0].link }} /> : <></>}

        {/* {image ? image.map((item, index) => {
          console.log("Item: ", item)
          if (!item.link) {
            return (<></>)
          } else {
            return (
              <View key={index}>
                <Photo source={{ uri: item.link }} />
              </View>
            )
          }
        }) : <></>} */}

        <Footer>
          <FooterMenu>
            <Button onPress={handleLike}>
              <Iconwrap>
                <AntDesign
                  name="like2"
                  size={20}
                  color={isLike ? '#6495ED' : '#424040'}
                />
              </Iconwrap>
              <Text style={{ color: isLike ? "#6495ED" : "#424040" }} >Like</Text>
            </Button>

            <Button>
              <Iconwrap>
                <MaterialCommunityIcons
                  name="comment-outline"
                  size={20}
                  color="#424040"
                />
              </Iconwrap>
              <Text>Comment</Text>
            </Button>

            <Button>
              <Iconwrap>
                <MaterialCommunityIcons
                  name="share-outline"
                  size={20}
                  color="#424040"
                />
              </Iconwrap>
              <Text>Share</Text>
            </Button>
          </FooterMenu>
          <Separator />

          <FooterCount>
            <Row>
              <IconCount>
                <AntDesign name="like1" size={12} color="#FFFFFF" />
              </IconCount>
              <TextCount>{countLike} likes</TextCount>
            </Row>
            <Row>
              <TextCount>{comment ? comment.length : '0'} bình luận</TextCount>
            </Row>
          </FooterCount>

          {comment ? (
            comment.map((comment, index) => {
              //console.log(comment.poster);
              return (
                <Comment
                  authorName={comment.poster.username}
                  commentContent={comment.comment}
                  avatarUrl={comment.poster.avatar}
                  time="1d"
                />
              );
            })
          ) : (
            <Text>Loading...</Text>
          )}

          <View>
            <Row>
              <AvatarComment>
                {post ? <Avatar source={{ uri: avatarUrl }} /> : <></>}
              </AvatarComment>
              <Row>
                <View
                  style={{
                    backgroundColor: '#DFDFDF',
                    borderRadius: 25,
                    flexDirection: 'row',
                    marginRight: 10,
                    alignItems: 'center',
                  }}>
                  <TextInput
                    placeholder="Viết bình luận công khai ..."
                    value={writecomment}
                    onChangeText={value => {
                      setWriteComment(value);
                    }}
                  />
                  <Entypo name="emoji-happy" size={24} color="#545454" />

                  <EvilIcons name="camera" size={35} color="#545454" />

                  <MaterialCommunityIcons
                    name="file-gif-box"
                    size={27}
                    color="#545454"
                  />
                  <MaterialCommunityIcons
                    name="sticker-emoji"
                    size={27}
                    color="#545454"
                  />
                </View>
                <TouchableOpacity onPress={CreateComment}>
                  <Feather name="send" size={27} color="#545454" />
                </TouchableOpacity>
              </Row>
            </Row>
          </View>
        </Footer>
        <BottomDivider />
      </Container>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            // backgroundColor: 'transparent-black',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        <TouchableOpacity>
          <Row>
            <Entypo name="bell" size={30} style={{ margin: 10 }} />
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Cochin',
                fontWeight: 'bold',
              }}>
              Tắt thông báo cho bài viết này
            </Text>
          </Row>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => refRBSheet.current.close()}>
          <Row>
            <MaterialIcons name="edit" size={30} style={{ margin: 10 }} />
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Cochin',
                fontWeight: 'bold',
              }}>
              Chỉnh sửa bài viết
            </Text>
          </Row>
        </TouchableOpacity>
        <TouchableOpacity>
          <Row>
            <AntDesign name="delete" size={30} style={{ margin: 10 }} />
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Cochin',
                fontWeight: 'bold',
              }}>
              Xóa bài viết
            </Text>
          </Row>
        </TouchableOpacity>
      </RBSheet>
    </>
  );
};

export default FeedDetails;
