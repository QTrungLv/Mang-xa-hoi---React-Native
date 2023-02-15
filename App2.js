import React from 'react';

import {StatusBar, ScrollView} from 'react-native';

import styled from 'styled-components/native';

import AppBar from './components/AppBar';
import ToolBar from './components/ToolBar';
import Users from './components/Users';
import Story from './components/Story';
import Feed from './components/Feed';
import BottomSheet from './components/BottomSheet';
import FeedDetails from './components/FeedDetails';

const Container = styled.SafeAreaView`
  flex: 1;
`;

const App2 = () => {
  return (
    <>
      <Container>
        <FeedDetails />
      </Container>
    </>
  );
};

export default App2;
