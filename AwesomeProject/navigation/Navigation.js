import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Otp from '../components/SignIn/Otp';
import SignIn from '../components/SignIn/SignIn';
import TabNavigation from '../components/Homepage/TabNavigation'
import SignUp from '../components/SignUp/SignUp'
import Redirect from '../components/Redirect/Redirect';
import MakePost from '../components/Post/MakePost';
import Post from '../components/Post/Post';

const Stack = createNativeStackNavigator()

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='MakePost' screenOptions={{ headerShown: true }} >
                <Stack.Screen name={"Redirect"} component={Redirect} />
                <Stack.Screen name={"OTP"} component={Otp} /*options={{ headerShow: false }}*/ />
                <Stack.Screen name={"SignIn"} component={SignIn} /*options={{ headerShown: false }}*/ />
                <Stack.Screen name={"MakePost"} component={MakePost} options={{ headerShown: false }} />
                <Stack.Screen name={"SignUp"} component={SignUp} />
                <Stack.Screen name={"Post"} component={Post} />
                {/* <Stack.Screen name={"NameLogin"} component={NameLogin} /> */}
                {/* <Stack.Screen name={"HomePage"} component={HomePage} /> */}
                {/* <Stack.Screen name={"Input"} component={InputSignIn} /> */}
                <Stack.Screen name={"Tab"} component={TabNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}