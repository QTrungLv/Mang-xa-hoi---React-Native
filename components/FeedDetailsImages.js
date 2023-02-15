import React from 'react';

import {View, TouchableOpacity, ScrollView} from 'react-native';
import styled from 'styled-components/native';

import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
  justify-content: space-around;
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

const FeedDetailsImages = () => {
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

          <Entypo name="dots-three-horizontal" size={15} color="#222121" />
        </Header>
        <ScrollView>
          <Post>
            Jericho Swain is the visionary ruler of Noxus, an expansionist
            nation that reveres only strength. Though he was cast down and
            crippled in the Ionian wars
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
          </Footer>

          <Photo source={require('../assets/post2.jpg')} />
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
          </Footer>
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
          </Footer>

          <Photo source={require('../assets/post2.jpg')} />
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
          </Footer>
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
          </Footer>

          <Photo source={require('../assets/post1.jpg')} />
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
          </Footer>
        </ScrollView>
      </Container>
    </>
  );
};

export default FeedDetailsImages;
