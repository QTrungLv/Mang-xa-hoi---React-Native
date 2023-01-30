import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, Image } from 'react-native';

export default function Otp() {

    const [otp, setOtp] = useState("")


    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#F5FCFF", alignItems: "center", justifyContent: "center"}}>
            <Text>Chúng tôi đã gửi OTP đến email của bạn. Vui lòng kiểm tra email và điền OTP của bạn xuống dưới</Text>
            <Text>OTP của bạn: </Text>
            <TextInput placeholder='Ex: 123456' />
        </SafeAreaView>
    )
}