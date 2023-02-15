rnf;
import {View, Text} from 'react-native';
import React from 'react';
import AppBar from './AppBar';
import ToolBar from './ToolBar';
import Users from './Users';
import Story from './Story';

export default function Homepage() {
  return (
    <View>
      <ScrollView style={{flex: 1}}>
        <AppBar />
        <ToolBar />
        <Users />
        <Story />
        <Feed />
      </ScrollView>
    </View>
  );
}
