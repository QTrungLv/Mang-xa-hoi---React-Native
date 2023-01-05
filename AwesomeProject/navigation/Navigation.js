import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Otp from '../components/SignIn/Otp';
import SignIn from '../components/SignIn/SignIn';
import TabNavigation from '../components/Homepage/TabNavigation'
import Post from '../components/Post/Post';
import SignUp from '../components/SignUp/SignUp'

const Stack = createNativeStackNavigator()

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='SignIn' /*screenOptions={{ headerShown: false }}*/ >
                {/* <Stack.Screen name={"Redirect"} component={Redirect} /> */}
                <Stack.Screen name={"OTP"} component={Otp} options={{ headerShow: false }} />
                <Stack.Screen name={"SignIn"} component={SignIn} />
                <Stack.Screen name={"MakePost"} component={Post} options={{ title: 'Make Post' }} />
                <Stack.Screen name={"SignUp"} component={SignUp} />
                {/* <Stack.Screen name={"NameLogin"} component={NameLogin} /> */}
                {/* <Stack.Screen name={"HomePage"} component={HomePage} /> */}
                {/* <Stack.Screen name={"Input"} component={InputSignIn} /> */}
                <Stack.Screen name={"Tab"} component={TabNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}