import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaView, View, Image, StyleSheet, Text, TextInput, Pressable, ScrollView, SectionList } from 'react-native'
import avatar from '../../assets/icon/avatar.jpg'
import goBack from '../../assets/icon/goback.png'
import imageicon from '../../assets/icon/imageicon.png'
import drafticon from '../../assets/icon/drafticon.png'
import trashicon from '../../assets/icon/trashicon.png'
import RBSheet from "react-native-raw-bottom-sheet";
import { launchImageLibrary } from 'react-native-image-picker';

import DocumentPicker from 'react-native-document-picker';
import axios from 'axios';
import Dialog from 'react-native-dialog';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Header } from '../../utils/Header';
import { useSelector } from 'react-redux';

export default function MakePost({ navigation }) {

    const userInfo = useSelector(state => state.user)
    console.log("Info:", userInfo)
    const [showDialog, setShowDialog] = useState(false)
    const [userData, setUserData] = useState("")
    const [havePost, setHavePost] = useState(false)
    const [token, setToken] = useState("")
    // Post 
    const [description, setDecription] = useState("")
    const [uriImage, setUriImage] = useState([])
    const [video, setVideo] = useState(null)
    const [status, setStatus] = useState(null)
    //Post pimages
    const [numOfPictures, setNumOfPictures] = useState(0)
    //postButton
    const [postButtonDisabled, setPostButtonDisabled] = useState(false)

    //Form Data
    const refRBSheet = useRef()

    const selectImage = () => {
        const options = {
            maxWidth: 2000,
            maxHeight: 2000,
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };

        launchImageLibrary(options, response => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                console.log(response);

                setNumOfPictures(numOfPictures + 1)
                const item = { key: numOfPictures, uri: response.assets[0].uri, name: response.assets[0].fileName }
                setUriImage([...uriImage, item]);
            }
        });
    };

    const getToken = async () => {
        try {
            const value = await AsyncStorage.getItem("@UserToken")

            if (value != null) {
                setToken(value)
                console.log("Value: ", value)
            }

        } catch (error) {
            console.log(error)
        }
    }

    const handlePost = async () => {
        getToken()
        const axios = Header(token)

        await axios.post("http://10.0.2.2:8000/api/post/create", {
            token: token,
            described: description,
            image: uriImage,
            user_id: userData.id
        }
        )
            .then((res) => {
                console.log(res.data)
                setShowDialog(true)
            }).catch((err) => {
                console.log(err)
            })



    }

    //Note 2
    function handlerGoBack() {
        havePost ? refRBSheet.current.open() : navigation.navigate("Tab")
    }

    useEffect(() => {
        description ? setPostButtonDisabled(true) : setPostButtonDisabled(false)
    }, [description])

    useEffect(() => {
        numOfPictures > 0 ? setPostButtonDisabled(true) : setPostButtonDisabled(false)
    }, [numOfPictures])

    const handleCancel = () => {
        setShowDialog(false)
        navigation.navigate("Tab")
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <Pressable
                    style={styles.goBackPosition}
                    onPress={handlerGoBack}
                >
                    <Image source={goBack} style={styles.iconGoBack} />
                </Pressable>
                <Text style={styles.headerText}>Tạo bài viết</Text>
                {postButtonDisabled ?
                    <Pressable
                        onPress={handlePost}
                        style={({ pressed }) => [{ backgroundColor: pressed ? "#4267B2" : "#2196F3" }, styles.buttonPost]}
                    >
                        <Text style={[{ color: "#fff" }, styles.textButtonPost]}>ĐĂNG</Text>
                    </Pressable>
                    : <></>}


            </View>
            <View style={{ borderWidth: 0.3, borderBottomColor: "#D9D9D9" }}></View>
            <View style={styles.post}>
                <View style={styles.headerPost}>
                    <Image style={styles.avatarImage} source={{ uri: userInfo.avatar }} />
                    <View style={styles.personalPost}>
                        <Text style={styles.namePost}>{userInfo.username}</Text>
                    </View>
                </View>
                <TextInput
                    style={styles.textInput}
                    placeholder='What are you thinking of?'
                    multiline={true}
                    name="description"
                    value={description}
                    onChangeText={value => setDecription(value)}
                />
            </View>

            {numOfPictures === 0 ? <></> : numOfPictures === 1 ? <Image style={{ width: 180, height: 180, margin: 4, alignSelf: "center" }} source={uriImage[0]} />
                : numOfPictures === 2 ?
                    <View flexDirection="row" style={{ alignSelf: "center" }}>
                        <Image style={{ width: 180, height: 180, margin: 4 }} source={uriImage[0]} />
                        <Image style={{ width: 180, height: 180, margin: 4 }} source={uriImage[1]} />
                    </View>
                    : numOfPictures === 3 ?
                        <View>
                            <View flexDirection="row" style={{ alignSelf: "center" }}>
                                <Image style={{ width: 180, height: 180, margin: 4 }} source={uriImage[0]} />
                                <Image style={{ width: 180, height: 180, margin: 4 }} source={uriImage[1]} />
                            </View>
                            <Image style={{ width: 180, height: 180, margin: 4, alignSelf: "center" }} source={uriImage[2]} />
                        </View>

                        : numOfPictures === 4 ?
                            <View>
                                <View flexDirection="row" style={{ alignSelf: "center" }}>
                                    <Image style={{ width: 180, height: 180, margin: 4 }} source={uriImage[0]} />
                                    <Image style={{ width: 180, height: 180, margin: 4 }} source={uriImage[1]} />
                                </View>
                                <View flexDirection="row" style={{ alignSelf: "center" }}>
                                    <Image style={{ width: 180, height: 180, margin: 4 }} source={uriImage[2]} />
                                    <Image style={{ width: 180, height: 180, margin: 4 }} source={uriImage[3]} />
                                </View>
                            </View>

                            : <></>

            }


            <Pressable style={styles.button} onPress={selectImage}>
                <Image source={imageicon} style={styles.iconButton} />
                <Text style={styles.textButton}>Thêm hình ảnh</Text>
            </Pressable>






            {/*Bottom Sheet*/}
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={false}
                closeDuration={100}
                visible={true}
                customStyles={{
                    wrapper: {
                    },
                    draggableIcon: {
                        backgroundColor: "#000"
                    }
                }}
            >
                <View style={{ height: 60, borderBottomWidth: 0.5 }}>
                    <Text style={styles.bottomSheetTitleButton}>Bạn muốn có muốn tiếp tục bài viết sau?</Text>
                </View>

                <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? "#D9D9D9" : "white" }, styles.bottomSheetButton]} onPress={() => { }}>
                    <Image source={trashicon} style={styles.buttomSheetIconButton} />
                    <Text style={styles.buttomSheetTextButton}>Bỏ bài viết</Text>
                </Pressable>
                <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? "#D9D9D9" : "white" }, styles.bottomSheetButton]} onPress={() => { }}>
                    <Image source={drafticon} style={styles.buttomSheetIconButton} />
                    <Text style={styles.buttomSheetTextButton2}>Tiếp tục chỉnh sửa</Text>
                </Pressable>

            </RBSheet>
            <Dialog.Container visible={showDialog}>
                <Dialog.Description>
                    Bạn đã đăng bài thành công
                </Dialog.Description>
                <Dialog.Button label="OK" onPress={handleCancel} />
            </Dialog.Container>

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#F5FCFF"
    },
    avatarImage: {
        width: 40,
        height: 40,
        borderRadius: 45,

    },
    post: {

        backgroundColor: "#F5FCFF",
        padding: 10,
        //height: "100%"
    },
    headerPost: {

        flexDirection: "row",

    },
    personalPost: {
        flexDirection: "column",
        marginStart: 10
    },
    namePost: {
        fontSize: 18,
        fontWeight: "bold"
    },
    publicPost: {

    },
    textInput: {
        marginTop: 10,
        padding: 10,
        backgroundColor: "white",
        width: "100%",
        height: 60,
        textAlignVertical: "top",
        borderWidth: 0.5

    },
    headerContainer: {
        height: 60,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",

    },
    iconGoBack: {
        width: 23,
        height: 23,

    },
    goBackPosition: {
        position: "absolute",
        left: 18
    },
    headerText: {
        position: "absolute",
        left: 72,
        fontSize: 20,
        color: "#000",
        fontWeight: "600"
    },

    buttonPost: {
        right: 18,
        position: "absolute",
        padding: 10,

    },
    textButtonPost: {
        fontSize: 20,
        fontWeight: "bold",
    },

    // Tính nngw chi post
    iconButton: {
        width: 30,
        height: 30,
        marginLeft: 40

    },
    button: {
        flexDirection: "row",
        height: 50,
        backgroundColor: "#fff",
        alignItems: "center",
        marginTop: 10,
        borderWidth: 0.5,
        borderColor: "#000",
        width: "100%",
    },
    textButton: {
        fontSize: 18,
        marginStart: 10
    },
    addImageButton: {
        width: 150,
        height: 150,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10
    },
    bottomSheetTitleButton: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#000",
        marginLeft: 20
    },
    bottomSheetButton: {
        flexDirection: "row",
        alignItems: "center",
        height: 50,
        marginLeft: 20,
        marginTop: 5
    },
    buttomSheetIconButton: {
        width: 40,
        height: 40,
    },
    buttomSheetTextButton: {
        fontSize: 18,
        color: "#000",
        fontWeight: "600",
        shadowOpacity: 0.8
    },
    buttomSheetTextButton2: {
        fontSize: 18,
        color: "blue",
        fontWeight: "600",
        shadowOpacity: 0.8
    }
})