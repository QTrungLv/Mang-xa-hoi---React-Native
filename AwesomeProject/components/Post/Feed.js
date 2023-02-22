import React, { useRef, useState, useEffect } from 'react';

import { View, TouchableOpacity, ScrollView } from 'react-native';

import styled from 'styled-components/native';

import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RBSheet from 'react-native-raw-bottom-sheet'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Dialog from 'react-native-dialog';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Header } from '../../utils/Header';
import { useNavigation } from '@react-navigation/native';
const Container = styled.View`
  flex: 1;
  background: #fff
`;
const HeaderUI = styled.View`
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
`;
const Time = styled.Text`
  font-size: 9px;
  color: #747476;
`;
const Post = styled.Text`
  font-size: 12px;
  color: #222121;
  line-height: 16px;
  padding: 0 11px;
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
  font-size: 12px;
  color: #424040;
`;
const BottomDivider = styled.View`
  width: 100%;
  height: 9px;
  background: #f0f2f5;
`;


const ContainerAvatar = styled.View`
	width: 40px;
	height: 40px;
	position: relative;
`
const UserAvatar = styled.Image`
	width: 40px;
	height: 40px;
	border-radius: 20px;
	border-color: #1777f2;
	border-width: ${props => (props.story ? '3px' : 0)};
`
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
`
const RowDetails = styled.View`
align-items: center;
flex-direction: row;
`;
const TextDetails = styled.Text`
  font-size: 13px;
  color: #424040;
`;
//id 
//name - string: Ten nguoi dung dang  
//image - array[string]: url cua hinh anh
//described - string: Mieu ta
//created - string: thoi gian dang
//like - number: so luong like
//comment - number: so comment
//is_like - string: kiem tra da like
//


const Feed = ({ postDetails}) => {
  const { id, author, image, video, described, like, comment, is_liked, is_block, can_edit } = postDetails;
  const navigation = useNavigation()
  const [isLike, setIsLike] = useState(is_liked)
  const [countLike, setCountLike] = useState(like)
  const refRBSheet = useRef();
  const [token, setToken] = useState("")
  const [showDialog, setShowDialog] = useState(false)
  const [showDialog2, setShowDialog2] = useState(false)
  const [showConf, setShowConf] = useState(false)
  useEffect(() => {
    const getToken = async () => {

      const value = await AsyncStorage.getItem("@UserToken")

      if (value != null) {
        setToken(value)

      }
    }
    getToken()
  }, [])

  const handleOption1 = () => {

  }

  const handleOption2 = () => {

  }
  const handleOption3 = async () => {
    const axios = Header(token)
    await axios
      .post(`http://10.0.2.2:8000/api/post/${id}/delete`, {
        token: token
      })
      .then(() => {
        setShowDialog(true)
      })
      .catch(() => {
        setShowDialog2(true)
      })
  }

  const handleOk = () => {
    handleOption3()
    setShowConf(false)
  }

  const handleCancel = () => {
    setShowConf(false)
  }

  const handleCancel1 = () => {
    setShowDialog(false)
  }

  const handleCancel2 = () => {
    setShowDialog2(false)
  }

  const handleLike = async () => {
    await axios.post(`http://10.0.2.2:8000/api/post/likePost/${id}?token=${token}`)
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
    )
  }
  if (is_block) {
    return (
      <></>
    )
  }
  return (
    <>
      <Container>
        <HeaderUI>
          <Row>
            <Avatar source={{ uri: author?.avatar }} />
            <View style={{ paddingLeft: 10 }}>
              <User>{author?.username}</User>
              {/* <Row>
                <Time>{time}</Time>
                <Entypo name="dot-single" size={12} color="#747476" />
                <FontAwesome name="globe" size={10} color="#747476" />
              </Row> */}
            </View>
          </Row>

          <Entypo name="dots-three-horizontal" size={15} color="#222121" onPress={() => refRBSheet.current.open()} />
        </HeaderUI>

        <Post>{described}</Post>


        {image ? image.map((item, index) => {
          if (!item.link) {
            return (<></>)
          } else {
            return (
              <View key={index}>
                <Photo source={{ uri: item.link }} />
              </View>
            )
          }
        }) : <></>}



        <Footer>
          <FooterCount>
            <Row>
              <IconCount>
                <AntDesign name="like1" size={12} color="#FFFFFF" />
              </IconCount>
              <TextCount>{countLike} likes</TextCount>
            </Row>
            <TextCount>{comment} comments</TextCount>
          </FooterCount>

          <Separator />

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

          </FooterMenu>
        </Footer>
        <BottomDivider />


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
          <TouchableOpacity onPress={() => navigation.navigate("FeedDetails", { post_id: id })}>
            <RowDetails>
              <Entypo name="bell" size={30} style={{ margin: 10 }} />
              <TextDetails
                style={{
                  fontSize: 20,
                  fontFamily: 'Cochin',
                  fontWeight: 'bold',
                }}>
                Chi tiết bài viết
              </TextDetails>
            </RowDetails>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOption2}>
            <RowDetails>
              <MaterialIcons name="edit" size={30} style={{ margin: 10 }} />
              <TextDetails
                style={{
                  fontSize: 20,
                  fontFamily: 'Cochin',
                  fontWeight: 'bold',
                }}>
                Chỉnh sửa bài viết
              </TextDetails>
            </RowDetails>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setShowConf(true)}>
            <RowDetails>
              <AntDesign name="delete" size={30} style={{ margin: 10 }} />
              <TextDetails
                style={{
                  fontSize: 20,
                  fontFamily: 'Cochin',
                  fontWeight: 'bold',
                }}>
                Xóa bài viết
              </TextDetails>
            </RowDetails>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => refRBSheet.current.close()}>
            <RowDetails>
              <AntDesign name="closecircleo" size={30} style={{ margin: 10 }} />
              <TextDetails
                style={{
                  fontSize: 20,
                  fontFamily: 'Cochin',
                  fontWeight: 'bold',
                }}>
                Đóng
              </TextDetails>
            </RowDetails>
          </TouchableOpacity>
        </RBSheet>

        <Dialog.Container visible={showConf}>
          <Dialog.Description>
            Bạn có muốn xóa bài viết này không?
          </Dialog.Description>
          <Dialog.Button label="Đồng ý" onPress={handleOk} />
          <Dialog.Button label="Hủy" onPress={handleCancel} />
        </Dialog.Container>

        <Dialog.Container visible={showDialog}>
          <Dialog.Description>
            Bạn đã xóa bài viết thành công
          </Dialog.Description>
          <Dialog.Button label="OK" onPress={handleCancel1} />
        </Dialog.Container>

        <Dialog.Container visible={showDialog2}>
          <Dialog.Description>
            Bạn không thể xóa bài viết này
          </Dialog.Description>
          <Dialog.Button label="OK" onPress={handleCancel2} />
        </Dialog.Container>
      </Container>
    </>

  );
};

export default Feed;
