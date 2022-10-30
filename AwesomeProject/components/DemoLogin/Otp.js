import React, { useState } from 'react';
import { SafeAreaView, TextInput, View, Text, Pressable } from 'react-native';

export default function Otp({navigation}) {

    [otp, setOtp] = useState("")

    return (
        <SafeAreaView>
            <View>
                <Text>Nhập OTP</Text>
                <TextInput style={""} placeholder="VD: 123456" />
            </View>
            <Pressable style={{
                backgroundColor: "blue",
                borderRadius: 8,
                padding: 6,
                width: 150,
                height: 40,
                alignItems: "center"
            }} onPress={() => {
                alert("Read comment in Otp.js")
                //Code to check OTP
                //If yes uncomment this
                //navigation.navigate("Success")
                //If no, not test
            }} >
                <Text style={{ fontSize: 18, color: "white" }}>Login</Text>
            </Pressable>
        </SafeAreaView>
    )
}