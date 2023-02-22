import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FriendRequestScreen from './FriendRequestScreen';
import SuggestScreen from './SuggestionScreen';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Friend Request') {
            iconName = 'user-plus';
          } else if (route.name === 'Suggestions') {
            iconName = 'users';
          }

          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#1877f2',
        tabBarInactiveTintColor: '#555',
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
        },
        tabBarStyle: {
          display: 'flex',
        },
      })}>
      <Tab.Screen name="Friend Request" component={FriendRequestScreen} />
      <Tab.Screen name="Suggestions" component={SuggestScreen} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
