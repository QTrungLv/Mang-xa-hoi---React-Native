import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Image, Text, TextInput, Pressable, Alert, } from 'react-native';
import { BASE_URL } from '../../Constrant';
import { SignInContext } from '../../context/SignInContext';
import facebookicon1 from './../images/facebookicon.png'
import axios from 'axios';
import { connect, useDispatch } from 'react-redux';
import { signIn } from '../../redux/actions/action';





const SignIn = ({ navigation }) => {

    // const [SignInForm, setSignInForm] = useState({
    //     username: "",
    //     password: ""
    // })
    // const { username, password } = SignInForm

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    // const onChangeSignInForm = () => {
    //     setUsername()
    // }

    const handleSignIn = async () => {
        console.log("Start")
        const signInForm = {
            username: username,
            password: password
        }
        try {
            const response = await axios.post('http://10.0.2.2:8000/api/login?username=yenlinh2310.tn@gmail.com&password=example')
            if (response.data.success) {
                signIn(signInForm)

                //navigation.navigate("Tab")
            } else {

                console.log("response.data.message")
            }


        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.imagePosition}>
                <Image style={styles.image} source={facebookicon1} alt="facebookicon" />
            </View>
            <View style={styles.textSignInPosition}>
                <Text style={styles.textSignIn}>Sign In</Text>
            </View>
            <View style={styles.textHiTherePosition}>
                <Text style={styles.textHiThere}>
                    Hi there! Nice to see you.
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
                    onChangeText={value => setUsername(value)}
                    onEndEditing={() => { username.length < 6 ? setMessage("Email invalid") : setMessage("") }}
                />
                <Text style={styles.message}>{message}</Text>
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
                    onChangeText={value => setPassword(value)}
                />
            </View>

            <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? '#4267B2' : '#2196F3' }, styles.button]} onPress={handleSignIn}>
                <Text style={styles.textButton}>
                    SIGN IN
                </Text>
            </Pressable>

            <View style={styles.position}>
                <View style={styles.forgotPosition}>
                    <Text style={styles.forgot}>Forgot Password?</Text>
                </View>
                <Pressable style={styles.signUpPosition} onPress={() => navigation.navigate("SignUp")}>
                    <Text style={styles.signUp}>Sign Up</Text>
                </Pressable>
            </View>

        </ScrollView>
    )



}

export default connect(null, signIn)(SignIn)

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
        fontSize: 18
    },

    textInputPosition: {
        marginLeft: 50,
        marginRight: 50,
    },
    textInput: {
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        height: 40
    },

    button: {
        alignSelf: "center",
        width: "80%",
        height: 60,
        // backgroundColor: "#2196F3",
        borderRadius: 10,

        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        marginTop: 30,
        marginLeft: 10,
        marginEnd: 10


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
        fontWeight: "bold",
    },
    message: {
        color: "red",
        fontSize: 12
    }

})