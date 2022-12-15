import React, { useContext, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Image, Text, TextInput, Pressable, } from 'react-native';
import { BASE_URL } from '../../constrants/Constrant';
import { SignInContext } from '../../context/SignInContext';
import facebookicon1 from './../images/facebookicon2.png'
import axios from 'axios';

export default function SignIn({ navigation }) {



    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    const loginUser = async () => {
        console.log("Start")
        try {
            // const response = await axios.post(`${BASE_URL}/api/login?username=${username}&password=${password}`)
            // const response = await axios.post(`http://127.0.0.1:8000/api/login?username=yenlinh2310.tn@gmail.com&password=example`)
            const response = await fetch('http://127.0.0.1:8000/api/login?username=yenlinh2310.tn@gmail.com&password=example')
            const json = response.json()
            console.log(json.data)

        } catch (error) {
            console.log(error)
        }
    }

    // const onChangeSignInForm = () => {
    //     setUsername()
    // }

    // const onChangeSignInForm = (event) => setSignInForm({ ...signInForm, [event.target.name]: [event.target.value] })

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
                    name='username'
                    value={username}
                    onChangeText={(value) => setUsername(value)}
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
                    name="password"
                    value={password}
                    onChangeText={(value) => setPassword(value)}
                />
            </View>

            <Pressable style={styles.button} onPress={() => navigation.navigate('OTP')}>
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
        marginLeft: 50,
        color: "gray",
        fontWeight: "normal"
    },
    textHiThere: {
        fontSize: 16
    },
    inputTitletPosition: {
        marginLeft: 50,
        marginTop: 10
    },
    inputTitle: {
        color: "blue",
        fontSize: 20
    },

    textInputPosition: {
        marginLeft: 50,
        marginRight: 50,
    },
    textInput: {
        borderBottomColor: '#000',
        borderBottomWidth: 1
    },

    button: {
        alignSelf: "center",
        width: "80%",
        height: 50,
        backgroundColor: "#4267B2",
        borderRadius: 10,

        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        marginTop: 30,


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