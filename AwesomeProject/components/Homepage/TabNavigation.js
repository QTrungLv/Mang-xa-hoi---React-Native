import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Image } from 'react-native'
import HomePage from './HomePage'
import Message from './Message'
import Notify from './Notify'
import Setting from './Settings'
import homeicon from '../images/homeicon.png'
import messageicon from '../images/messageicon.jpg'
import notifyicon from '../images/notifyicon.png'
import navbaricon from '../images/baricon.png'

const Tab = createBottomTabNavigator()


const TabNavigation = () => {
    return (

        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                height: 60,
            }
            
        }} >
            <Tab.Screen name="HomePage" component={HomePage} options={{
                tabBarIcon: ({ size, focused, color }) => {
                    return (
                        <Image style={{ width: size, height: size }} source={homeicon} />
                    );
                }
            }} />
            <Tab.Screen name="Message" component={Message} options={{
                tabBarIcon: ({ size, focused, color }) => {
                    return (
                        <Image style={{ width: size, height: size }} source={messageicon} />
                    );
                }
            }} />
            <Tab.Screen name="Notify" component={Notify} options={{
                tabBarIcon: ({ size, focused, color }) => {
                    return (
                        <Image style={{ width: size, height: size }} source={notifyicon} />
                    );
                }
            }} />
            <Tab.Screen name="Setting" component={Setting} options={{
                tabBarIcon: ({ size, focused, color }) => {
                    return (
                        <Image style={{ width: size, height: size }} source={navbaricon} />
                    );
                }
            }} />
        </Tab.Navigator>

    )
}

export default TabNavigation