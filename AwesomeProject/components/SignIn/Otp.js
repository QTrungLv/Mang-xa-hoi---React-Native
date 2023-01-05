import React from 'react';
import facebookicon1 from './../images/facebookicon2.png'
import { SafeAreaView, Text, TextInput, Image } from 'react-native';

export default function Otp() {
    return (
        <SafeAreaView>
            <Image source={facebookicon1} alt/>
            <Text>We have sent a OTP to your email. Enter this below</Text>
            <Text>Enter your OTP</Text>
            <TextInput placeholder='Ex: 123456' />
        </SafeAreaView>
    )
}