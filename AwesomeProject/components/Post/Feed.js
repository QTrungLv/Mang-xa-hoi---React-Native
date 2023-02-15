import React, { useRef } from 'react';

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
const Feed = ({ postDetails = null }) => {
    const { username, time, postContent, likeCount, isLike, commentCount } =
        postDetails;
    return (
        <>
            <Container>
                <Header>
                    <Row>
                        <Avatar source={require('../../assets/user3.jpg')} />
                        <View style={{ paddingLeft: 10 }}>
                            <User>{username}</User>
                            <Row>
                                <Time>{time}</Time>
                                <Entypo name="dot-single" size={12} color="#747476" />
                                <FontAwesome name="globe" size={10} color="#747476" />
                            </Row>
                        </View>
                    </Row>

                    <TouchableOpacity onPress={() => refRBSheet.current.open()}>
                        <Entypo name="dots-three-horizontal" size={15} color="#222121" />
                    </TouchableOpacity>
                </Header>

                <Post>{postContent}</Post>
                <Photo source={require('../../assets/post3.jpg')} />

                <Footer>
                    <FooterCount>
                        <Row>
                            <IconCount>
                                <AntDesign name="like1" size={12} color="#FFFFFF" />
                            </IconCount>
                            <TextCount>{likeCount} likes</TextCount>
                        </Row>
                        <TextCount>{commentCount} comments</TextCount>
                    </FooterCount>

                    <Separator />

                    <FooterMenu>
                        <Button>
                            <Iconwrap>
                                <AntDesign
                                    name="like2"
                                    size={20}
                                    color={isLike ? '#6495ED' : '#424040'}
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
            </Container>
        </>
    )
}