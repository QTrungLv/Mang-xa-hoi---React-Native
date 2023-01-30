import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Image, StyleSheet, Text, TextInput, Pressable } from 'react-native'
import avatar from '../../assets/icon/avatar.jpg'
import goBack from '../../assets/icon/goback.png'
import imageicon from '../../assets/icon/imageicon.png'
import ActionSheet from 'react-native-actionsheet'

export default function MakePost({ navigation }) {

    const [data, setData] = useState({
        avatar: '../../assets/icon/avatar.jpg',
        name: "Quang Trung"
    })

    //Note 2
    function handlerGoBack() {

        !post ? navigation.goBack() : <></>

    }
    
    //Post pimages
    const [numOfPictures, setNumOfPictures] = useState(0)

    //describe post
    const [post, setPost] = useState("")

    //postButton
    const [postButtonDisabled, setPostButtonDisabled] = useState(true)

    useEffect(() => {
        post ? setPostButtonDisabled(false) : setPostButtonDisabled(true)
    }, [post])


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
                <Pressable
                    onPress={() => { }}
                    disabled={postButtonDisabled}
                    style={styles.buttonPost}
                >
                    <Text style={[{ color: !post ? "#D9D9D9" : "#000" }, styles.textButtonPost]}>ĐĂNG</Text>
                </Pressable>
            </View>
            <View style={{ borderWidth: 0.3, borderBottomColor: "#D9D9D9" }}></View>
            <View style={styles.post}>
                <View style={styles.headerPost}>
                    <Image style={styles.avatarImage} source={avatar} />
                    <View style={styles.personalPost}>
                        <Text style={styles.namePost}>{data.name}</Text>
                        <Text style={styles.publicPost}>Public</Text>
                    </View>
                </View>
                <TextInput
                    style={styles.textInput}
                    placeholder='What are you thinking of?'
                    multiline={true}
                    name="post"
                    value={post}
                    onChangeText={value => setPost(value)}
                />
            </View>

            {!numOfPictures ? <></> : numOfPictures == 1 ? <Image /> : numOfPictures == 2 ? <Image /> : numOfPictures == 3 ? <Image /> : <Image />}
            <Pressable style={styles.addImageButton}>
                <Text>
                    Add Image
                </Text>


            </Pressable>
            <Pressable style={styles.button}>
                <Image source={imageicon} style={styles.iconButton} />
                <Text style={styles.textButton}>Cảm xúc</Text>
            </Pressable>
            <Pressable style={styles.button}>
                <Image source={imageicon} style={styles.iconButton} />
                <Text style={styles.textButton}>Thêm hình ảnh</Text>
            </Pressable>
            <Pressable style={styles.button}>
                <Image source={imageicon} style={styles.iconButton} />
                <Text style={styles.textButton}>Thêm video</Text>
            </Pressable>
            <Pressable style={styles.button}>
                <Image source={imageicon} style={styles.iconButton} />
                <Text style={styles.textButton}>Chèn liên kết</Text>
            </Pressable>



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
        height: 100,
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
        padding: 5,

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
        width: 60,
        height: 60,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10
    }

})