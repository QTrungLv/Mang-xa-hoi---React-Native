import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import Avatar from './Avatar';

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

const Comment = ({authorName, commentContent, avatarUrl, time}) => {
  return (
    <>
      <Row>
        <AvatarComment>
          <Avatar source={avatarUrl} />
        </AvatarComment>
        <CommentContainer>
          <CommentName>{authorName}</CommentName>
          <Text>{commentContent}</Text>
        </CommentContainer>
      </Row>
      <View style={{flexDirection: 'row', marginLeft: 50}}>
        <Text style={{fontSize: 12, color: '#8F8F8F'}}>{time}</Text>
        <TouchableOpacity style={{marginLeft: 10}}>
          <Text style={{fontSize: 12, color: '#8F8F8F'}}>Thích</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 10}}>
          <Text style={{fontSize: 12, color: '#8F8F8F'}}>Phản hồi</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Comment;
