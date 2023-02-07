import React, {useRef} from 'react';
import {View, TouchableOpacity, TextInput} from 'react-native';
import styled from 'styled-components/native';

import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RBSheet from 'react-native-raw-bottom-sheet';

import Avatar from './Avatar';

const Container = styled.View`
  flex: 1;
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

const CommentName = styled.Text`
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

const FeedDetails = () => {
  const refRBSheet = useRef();

  return (
    <>
      <Container>
        <Header>
          <Row>
            <Avatar source={require('../assets/user3.jpg')} />
            <View style={{paddingLeft: 10}}>
              <User>Regi P</User>
              <Row>
                <Time>9m</Time>
                <Entypo name="dot-single" size={12} color="#747476" />
                <FontAwesome name="globe" size={10} color="#747476" />
              </Row>
            </View>
          </Row>

          <TouchableOpacity onPress={() => refRBSheet.current.open()}>
            <Entypo name="dots-three-horizontal" size={15} color="#222121" />
          </TouchableOpacity>
        </Header>

        <Post>
          Jericho Swain is the visionary ruler of Noxus, an expansionist nation
          that reveres only strength. Though he was cast down and crippled in
          the Ionian wars
        </Post>
        <Photo source={require('../assets/post3.jpg')} />

        <Footer>
          <FooterMenu>
            <Button>
              <Iconwrap>
                <AntDesign
                  name="like1"
                  size={20}
                  color="#6495ED"
                  backgroundColor="#6495ED"
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
          <Separator />

          <FooterCount>
            <Row>
              <IconCount>
                <AntDesign name="like1" size={12} color="#FFFFFF" />
              </IconCount>
              <TextCount>88 likes</TextCount>
            </Row>
            <Row>
              <TextCount>Bình luận liên quan nhất</TextCount>
              <AntDesign name="caretdown" size={12} color="#292929" />
            </Row>
          </FooterCount>
          <TextComment>Xem các bình luận trước ...</TextComment>
          <View>
            <Row>
              <AvatarComment>
                <Avatar source={require('../assets/user2.jpg')} />
              </AvatarComment>
              <View style={{backgroundColor: '#BFBFBF', borderRadius: 10}}>
                <CommentName>. Jericho</CommentName>
                <Text> . Pretty Anime! I love it</Text>
              </View>
            </Row>
            <View style={{flexDirection: 'row', marginLeft: 50}}>
              <Text> 2 giờ </Text>
              <TouchableOpacity style={{marginLeft: 10}}>
                <Text> Thích </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{marginLeft: 10}}>
                <Text> Phản hồi </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Row>
              <AvatarComment>
                <Avatar source={require('../assets/user1.jpg')} />
              </AvatarComment>
              <View style={{backgroundColor: '#BFBFBF', borderRadius: 10}}>
                <CommentName> Tết 2023</CommentName>
                <Text> comment mang tính chất minh họa</Text>
              </View>
            </Row>
            <View style={{flexDirection: 'row', marginLeft: 50}}>
              <Text> 2 giờ </Text>
              <TouchableOpacity style={{marginLeft: 10}}>
                <Text> Thích </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{marginLeft: 10}}>
                <Text> Phản hồi </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Row>
              <AvatarComment>
                <Avatar source={require('../assets/user3.jpg')} />
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
                  <TextInput placeholder="Viết bình luận công khai ..." />
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
                <Feather name="send" size={27} color="#545454" />
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
            <Entypo name="bell" size={30} style={{margin: 10}} />
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
            <MaterialIcons name="edit" size={30} style={{margin: 10}} />
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
            <AntDesign name="delete" size={30} style={{margin: 10}} />
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
