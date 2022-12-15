import React from 'react';
import { SafeAreaView, Text, TextInput } from 'react-native';

export default function Otp() {
    return (
        <SafeAreaView>
            <Text>Enter your OTP</Text>
            <TextInput placeholder='Ex: 123456' />
        </SafeAreaView>
    )
}