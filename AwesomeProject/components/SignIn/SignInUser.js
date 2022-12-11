import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Image, Text, TextInput, Pressable, } from 'react-native';
import facebookicon1 from './../images/facebookicon2.png'

export default function SignInUser({ navigation }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    const [otp, setOtp] = useState("")

    return (
        <ScrollView style={styles.container}>
            <View style={styles.imagePosition}>
                <Image style={styles.image} source={facebookicon1} />
            </View>
            <View style={styles.textSignInPosition}>
                <Text style={styles.textSignIn}>Sign In</Text>
            </View>
            <View style={styles.textHiTherePosition}>
                <Text style={styles.textHiThere}>
                    Hi there! Nice to see you again.
                </Text>
            </View>
            <View style={styles.inputTitletPosition}>
                <Text style={styles.inputTitle}>Email</Text>
            </View>
            <View style={styles.textInputPosition}>
                <TextInput
                    style={styles.textInput}
                    placeholder='Email or Phone Number'
                />
            </View>
            <View style={styles.inputTitletPosition}>
                <Text style={styles.inputTitle}>Password</Text>
            </View>
            <View style={styles.textInputPosition}>
                <TextInput
                    style={styles.textInput}
                    placeholder='Password'
                    secureTextEntry={true}
                />
            </View>

            <Pressable style={styles.button} >
                <Text style={styles.textButton}>
                    SIGN IN
                </Text>
            </Pressable>

            <View style={styles.position}>
                <View style={styles.forgotPosition}>
                    <Text style={styles.forgot}>Forgot Password?</Text>
                </View>
                <View style={styles.signUpPosition}>
                    <Text style={styles.signUp}>Sign Up</Text>
                </View>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    imagePosition: {
        marginTop: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 20,

    },
    textSignInPosition: {
        alignItems: "center",
        margin: 10
    },
    textSignIn: {
        fontSize: 28,
        fontWeight: "bold",
        color: "black",
        fontFamily: ""
    },
    textHiTherePosition: {
        marginLeft: 60,
        color: "gray",
        fontWeight: "normal"
    },
    textHiThere: {
        fontSize: 16
    },
    inputTitletPosition: {
        marginLeft: 60,
        marginTop: 15
    },
    inputTitle: {
        color: "blue",
        fontWeight: "bold",
        fontSize: 20
    },

    textInputPosition: {
        marginLeft: 60,
        marginRight: 60,
    },
    textInput: {
        borderBottomColor: '#000',
        borderBottomWidth: 2
    },

    button: {
        alignSelf: "center",
        width: "70%",
        height: 50,
        backgroundColor: "#4267B2",
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

    },
    position: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 60
    },
    forgotPosition: {

    },
    forgot: {
        fontSize: 16,
        fontWeight: "bold"
    },
    signUpPosition: {

    },
    signUp: {
        fontSize: 16,
        color: "blue",
        fontWeight: "bold"
    }

})