import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Otp from '../components/SignIn/Otp';
import SignIn from '../components/SignIn/SignIn';
import TabNavigation from '../components/HomePage/TabNavigation'
import SignUp from '../components/SignUp/SignUp'
import Redirect from '../components/Redirect/Redirect';
import MakePost from '../components/Post/MakePost';
import Post from '../components/Post/Post';
import ReportPost from '../components/Post/ReportPost';
import Birthday from '../components/SignUp/Birthday';
import Auth from '../components/auth/Auth'
import PersonPage from '../components/PersonalPage/PersonPage';
import Feed from '../components/Post/Feed';
import OtpSignUp from '../components/SignUp/Otp';
import FriendPage from '../components/PersonalPage/FriendPage';
import FeedDetails from '../components/Post/FeedDetails';
import SearchPage from '../components/Search/SearchPage';
import ChatUI from '../components/Chat/ChatUI';
import ChatHomePage from '../components/Chat/ChatHomePage';
const Stack = createNativeStackNavigator()

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Tab' screenOptions={{ headerShown: true }} >

                <Stack.Screen name={"Redirect"} component={Redirect} />
                <Stack.Screen name={"Auth"} component={Auth} />
                <Stack.Screen name={"Otp"} component={Otp} /*options={{ headerShow: false }}*/ />
                <Stack.Screen name={"SignIn"} component={SignIn} options={{ headerShown: false }} />
                <Stack.Screen name={"OtpSignUp"} component={OtpSignUp} options={{ headerShown: false }} />
                <Stack.Screen name={"MakePost"} component={MakePost} options={{ headerShown: false }} />
                <Stack.Screen name={"SignUp"} component={SignUp} />
                <Stack.Screen name={"Post"} component={Feed} />
                <Stack.Screen name={"Ngày Sinh"} component={Birthday} />

                {/* <Stack.Screen name={"NameLogin"} component={NameLogin} /> */}
                {/* <Stack.Screen name={"HomePage"} component={HomePage} /> */}
                {/* <Stack.Screen name={"Input"} component={InputSignIn} /> */}
                <Stack.Screen name={"Tab"} component={TabNavigation} options={{ headerShown: false }} />
                <Stack.Screen name={"ReportPost"} component={ReportPost} />
                <Stack.Screen name={"PersonalPage"} component={PersonPage} options={{ headerShown: false }} />
                <Stack.Screen name={"FriendPage"} component={FriendPage} options={{ headerShown: false }} />
                <Stack.Screen name={"FeedDetails"} component={FeedDetails} options={{ headerShown: false }} />
                <Stack.Screen name={"Search"} component={SearchPage} options={{ headerShown: false }} />
                <Stack.Screen name={"ChatHomePage"} component={ChatHomePage} options={{ headerShown: false }} />
                <Stack.Screen name={"ChatUI"} component={ChatUI} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}