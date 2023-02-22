import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';
import SearchUser from './SearchUser';
import SearchPost from './SearchPost';


const ContainerAppBar = styled.View`
  width: 100%;
  height: 58px;
  padding: 0 11px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
const TextAppBar = styled.Text`
  color: #3a86e9;
  font-size: 25px;
  font-weight: bold;
  letter-spacing: -0.3px;
`;
const RowAppBar = styled.View`
  flex-direction: row;
`;
const ButtonAppBar = styled.TouchableOpacity`
  width: 42px;
  height: 42px;
  border-radius: 21px;
  background: #eeeeee;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
`;
function handlerGoBack() {
  navigation.goBack();
}
const AppBar = () => {
  return (
    <ContainerAppBar>
      <TextAppBar>facebook</TextAppBar>
      <RowAppBar>
        <ButtonAppBar>
          <Feather name="search" size={29} color="black" />
        </ButtonAppBar>

        <ButtonAppBar>
          <MaterialCommunityIcons name="facebook-messenger" size={29} />
        </ButtonAppBar>
      </RowAppBar>
    </ContainerAppBar>
  );
};

const Tab = createBottomTabNavigator();

const TabBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: #fff;
  padding: 10px;
  height: 60px;
`;

const TabBarButton = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
`;

const TabBarText = styled.Text`
  font-size: 12px;
  color: ${props => (props.active ? '#000' : '#999')};
`;

const SearchPage = () => {
  return (
    <>
      <AppBar />

      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'SearchUser') {
              iconName = focused ? 'people' : 'people-outline';
            } else if (route.name === 'SearchPost') {
              iconName = focused ? 'document-text' : 'document-text-outline';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen
          name="SearchUser"
          component={SearchUser}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="SearchPost"
          component={SearchPost}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </>
  );
};

export default SearchPage;
