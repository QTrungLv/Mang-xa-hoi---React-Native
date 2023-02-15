import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Center, Input, StatusBar} from 'native-base';
import {color} from 'native-base/lib/typescript/theme/styled-system';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Birthday from './components/Birthday';
import Feed from './components/Feed';
import FeedDetails from './components/FeedDetails';
import FeedDetailsImages from './components/FeedDetailsImages';

import Login1 from './components/Login1';
import Otp from './components/otp';
import Policy from './components/Policy';
import SignUp from './components/SignUp';
import AppBar from './components/AppBar';
import ToolBar from './components/ToolBar';
import Users from './components/Users';
import Story from './components/Story';
import PersonPage from './components/PersonPage';

import ChatUI from './components/Chatui';
import ChatHomePage from './components/ChatHomePage';
export default function App() {
  return (
    // <>
    //   <Navigation />
    // </>

    <>
      {/* <ScrollView style={{flex: 1}}>
        <AppBar />
        <ToolBar />
        <Feed
          postDetails={{
            username: 'Regi Post',
            time: '9',
            avatarUrl: "{require('./assets/story3.jpg')}",
            postContent: 'Noi nao co anh sang, noi do khong co bong toi',
            likeCount: '10',
            commentCount: 20,
            isLike: false,
          }}
        />
      </ScrollView> */}
      <ChatHomePage />
      {/* <PersonPage
        username="ten"
        avatarUrl={require('./assets/story3.jpg')}
        coverUrl={require('./assets/story3.jpg')}
        address="Ha Noi City"
        email="Email@exxample@gmail.com"
      /> */}
      {/* <Feed
        postDetails={{
          username: 'Regi Post',
          time: '9',
          avatarUrl: "{require('./assets/story3.jpg')}",
          postContent: 'Noi nao co anh sang, noi do khong co bong toi',
          likeCount: '10',
          commentCount: 20,
          isLike: false,
        }} 
      />*/}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
const Stack = createNativeStackNavigator();
function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="signup">
        <Stack.Screen name={'login'} component={Login1} />
        <Stack.Screen name={'signup'} component={SignUp} />
        <Stack.Screen name={'Ngày Sinh'} component={Birthday} />
        <Stack.Screen name={'Otp'} component={Otp} />
        <Stack.Screen name={'Bài Viết'} component={Feed} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
