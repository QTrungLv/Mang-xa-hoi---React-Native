import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
`;

const Row = styled.View`
  align-items: center;
  flex-direction: row;
  margin: 10px;
`;

const Text = styled.Text`
  font-size: 14px;
  color: #424040;
  font-family: 'Open Sans';
`;

const CommentName = styled.Text`
  font-size: 16px;
  color: #424040;
  font-weight: bold;
  font-family: 'Open Sans';
`;

const AvatarComment = styled.View`
  margin-right: 10px;
`;

const CommentContainer = styled.View`
  background-color: #F2F2F2;
  border-radius: 10px;
  padding: 10px;
  shadow-color: #000;
  shadow-offset: {width: 0, height: 2};
  shadow-opacity: 0.8;
  shadow-radius: 2;
  elevation: 1;
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

const Comment = ({ authorName, commentContent, avatarUrl, time }) => {
  console.log('Day la log tu Comment', authorName, commentContent);
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
      <Row>
        <AvatarComment>
          <Avatar source={{ uri: avatarUrl }} />
        </AvatarComment>
        <CommentContainer>
          <CommentName>{authorName}</CommentName>
          <Text>{commentContent}</Text>
        </CommentContainer>
      </Row>
      <View style={{ flexDirection: 'row', marginLeft: 50 }}>
        <Text style={{ fontSize: 12, color: '#8F8F8F' }}>{time}</Text>
        <TouchableOpacity style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 12, color: '#8F8F8F' }}>Thích</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 12, color: '#8F8F8F' }}>Phản hồi</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Comment;
