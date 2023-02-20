import React, { useRef } from 'react';

import { View, TouchableOpacity, ScrollView } from 'react-native';

import styled from 'styled-components/native';

import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RBSheet from 'react-native-raw-bottom-sheet'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Container = styled.View`
  flex: 1;
  background: #fff
`;
const Header = styled.View`
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


const Feed = ({ postDetails }) => {
  const { author, image, video, described, like, comment, is_liked, is_block } = postDetails;
  const refRBSheet = useRef();

  const handleOption1 = () => {

  }

  const handleOption2 = () => {

  }
  const handleOption3 = () => {

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
        <Header>
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
        </Header>

        <Post>{described}</Post>
        <ScrollView horizontal={true}>
          {image ? image.map((item) => {
            <Photo source={{ uri: item.link }} />
          }) : <></>}
        </ScrollView>


        <Footer>
          <FooterCount>
            <Row>
              <IconCount>
                <AntDesign name="like1" size={12} color="#FFFFFF" />
              </IconCount>
              <TextCount>{like} likes</TextCount>
            </Row>
            <TextCount>{comment} comments</TextCount>
          </FooterCount>

          <Separator />

          <FooterMenu>
            <Button>
              <Iconwrap>
                <AntDesign
                  name="like2"
                  size={20}
                  color={is_liked ? '#6495ED' : '#424040'}
                />
              </Iconwrap>
              <Text>Like</Text>
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
          <TouchableOpacity onPress={handleOption1}>
            <RowDetails>
              <Entypo name="bell" size={30} style={{ margin: 10 }} />
              <TextDetails
                style={{
                  fontSize: 20,
                  fontFamily: 'Cochin',
                  fontWeight: 'bold',
                }}>
                Tắt thông báo cho bài viết này
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
          <TouchableOpacity onPress={handleOption3}>
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
      </Container>
    </>

  );
};

export default Feed;