import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Image, Text, TextInput, Pressable, Alert } from 'react-native';
import { BASE_URL } from '../../Constrant';
import { SignInContext } from '../../context/SignInContext';
import facebookicon1 from '../../assets/icon/facebookicon.png'
import axios from 'axios';
import { connect } from 'react-redux';
import { signIn } from '../../redux/actions/action'
import Dialog from 'react-native-dialog';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getToken } from '../../utils/Token';

const mapDispatchToProps = (dispatch) => {

    return {
        signIn: (data) => {
            console.log("Dispatch")
            dispatch(signIn(data))
        }
    }
}

function SignIn(props) {



    // const [SignInForm, setSignInForm] = useState({
    //     username: "",
    //     password: ""
    // })
    // const { username, password } = SignInForm

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    const [message, setMessage] = useState("")
    const [message1, setMessage1] = useState("")
    //Kiem tra lan nhap username dau
    const [done, setDone] = useState(false)

    //Kiem tra lan nhap password dau
    const [done1, setDone1] = useState(false)

    //Dialog
    const [dialog, setDialog] = useState("")
    const [showDialog, setShowDialog] = useState(false)
    // const onChangeSignInForm = () => {
    //     setUsername()
    // }


    //Kiem tra username
    //TC1: Khong phai email --> Email khong hop le
    //TC2: 
    useEffect(() => {
        username < 6 ? setMessage("Email không hợp lệ") : setMessage("")
    }, [username])

    useEffect(() => {
        password.length < 6 ? setMessage1("Password phải có từ 6 kí tự trở lên") : setMessage1("")
    }, [password])

    const handleSignIn = async () => {

        const signInForm = {
            username: username,
            password: password
        }

        //try {

        await axios.post('http://10.0.2.2:8000/api/login', {
            username: username,
            password: password
        }).then((res) => {
            console.log("data: ", res.data.data.id)
            props.signIn({ username: username, password: password })
            props.navigation.navigate("Otp", { user_id: res.data.data.id })
        }).catch((err) => {
            console.log(err)
            setDialog(err.response.data.message)
            setShowDialog(true)
        })


        // } catch (error) {
        //     setDialog(response.data.message)
        //     setShowDialog(true)
        // }
    }



    const handleCancel = () => {
        setShowDialog(false);
    };

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
                    onChangeText={value => { setUsername(value) }}
                    onEndEditing={() => { setDone(true) }}
                />
                {!done || username.length === 0 ? <></> : !message ? <></> : <Text style={styles.message}>{message}</Text>}
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
                    onEndEditing={() => setDone1(true)}
                />
                {!done1 || password.length === 0 ? <></> : !message1 ? <></> : <Text style={styles.message}>{message1}</Text>}

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
                <Pressable style={styles.signUpPosition} onPress={() => props.navigation.navigate("SignUp")}>
                    <Text style={styles.signUp}>Sign Up</Text>
                </Pressable>
            </View>

            {/* Dialog lỗi tài khoản mật khẩu không đúng  */}
            <Dialog.Container visible={showDialog}>
                <Dialog.Title>Lỗi đăng nhập</Dialog.Title>
                <Dialog.Description>
                    {dialog}
                </Dialog.Description>
                <Dialog.Button label="OK" onPress={handleCancel} />
            </Dialog.Container>
        </ScrollView>
    )

}


export default connect(null, mapDispatchToProps)(SignIn)

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