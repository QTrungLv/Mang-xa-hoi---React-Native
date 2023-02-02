import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, TextInput, Image, Pressable, StyleSheet, View } from 'react-native';
import axios from 'axios';
import Dialog from 'react-native-dialog';

export default function Otp(props) {

    const [otp, setOtp] = useState("")
    const [message, setMessage] = useState("")
    const [done, setDone] = useState(false)

    const [dialog, setDialog] = useState("")
    const [showDialog, setShowDialog] = useState(false)

    useEffect(() => {
        if (otp.length !== 6) setMessage("* Otp phải có 6 kí tự")
    }, [otp])

    const handleConfirm = async () => {
        try {
            const response = await axios.post("http://10.0.2.2:8000/api/che")
            if (response.data.success) {
                props.navigation.navigate("Tab")
            } else {
                setDialog(response.data.message)
                setShowDialog(true)
            }
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#F5FCFF" }}>
            <View style={{ marginLeft: 40, marginEnd: 40, marginTop: 80 }}>
                <Text style={styles.text1}>Chúng tôi đã gửi OTP đến email của bạn</Text>
                <Text style={styles.text1}>Vui lòng kiểm tra email và điền OTP của bạn xuống dưới</Text>
                <Text style={styles.text2}>OTP của bạn: </Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Ex: 123456'
                    name="otp"
                    value={otp}
                    onChangeText={(value) => setOtp(value)}
                    onEndEditing={() => { setDone(true) }}
                />
                {!done && otp.length !== 0 ? <></> : <Text style={{ color: "red", fontSize: 12 }}>{message}</Text>}
                <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? '#4267B2' : '#2196F3' }, styles.button]}
                    onPress={handleConfirm}
                >
                    <Text style={styles.textButton}>
                        Xác nhận
                    </Text>
                </Pressable>
            </View>
            <Dialog.Container visible={showDialog}>
                <Dialog.Title>Lỗi đăng nhập</Dialog.Title>
                <Dialog.Description>
                    {dialog}
                </Dialog.Description>
                <Dialog.Button label="OK" onPress={() => setShowDialog(false)} />
            </Dialog.Container>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    text1: {
        fontSize: 16,
        color: "blue",
        fontWeight: "bold",
        letterSpacing: 0.3
    },
    text2: {
        marginTop: 10,
        fontSize: 24,
        marginBottom: 10,
        color: "black",


    },
    textInput: {
        borderWidth: 0.5,
        borderColor: "#000",
        borderBottomWidth: 1,
        borderRadius: 5,

    },
    button: {
        alignSelf: "center",
        width: "100%",
        height: 60,
        // backgroundColor: "#2196F3",
        borderRadius: 10,

        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        marginTop: 20,

    },
    textButton: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    }
})