import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, SafeAreaView, Pressable, ScrollView } from 'react-native';
import searchicon from '../images/searchicon.png'
import homeicon from '../images/homeicon.png'
import messageicon from '../images/messageicon.jpg'
import notifyicon from '../images/notifyicon.png'
import navbaricon from '../images/baricon.png'
import avatar from '../images/avatar.jpg'
import postImage from '../images/postImage.jpg'
import likeicon from '../images/likeicon.png'
import shareicon from '../images/shareicon.png'
import likedicon from '../images/likedicon.png'
import SearchHeader from './SearchHeader';



export default function HomePage() {

    const [like, setLike] = useState("likeicon")

    return (
        <ScrollView style={styles.container}>
            <SearchHeader />

            <View style={styles.makePostContainer}>
                <View styles={styles.headerMakePost}>
                    <Image style={styles.avatarImage} source={avatar} />
                    <TextInput placeholder='How are you today?' />
                </View>
                <View style={styles.postButtonContainer}>
                    <Pressable style={styles.postButton}>
                        <Text>Post image</Text>
                    </Pressable>
                    <Pressable style={styles.postButton}>
                        <Text>Post video</Text>
                    </Pressable>
                    <Pressable style={styles.postButton}>
                        <Text>Make album</Text>
                    </Pressable>
                </View>

            </View>


            <View style={styles.postContainer}>
                <View style={styles.headerPost}>
                    <Image style={styles.avatarImage} source={avatar} />
                    <View style={styles.postTextHeader}>
                        <Text style={styles.textName}>Quang Trung</Text>
                        <Text style={styles.textTime}>An hour ago</Text>
                    </View>
                </View>
                <Image source={postImage} style={styles.postImage} />
                <View style={styles.likeShareContainer}>
                    <Pressable style={styles.likeShareButton}>
                        <Image source={likeicon} style={styles.likeShare} />
                    </Pressable>
                    <Pressable style={styles.likeShareButton}>
                        <Image source={shareicon} style={styles.likeShare} />
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

    navbarBottom: {
        flexDirection: "row",
        marginBottom: 0,
        justifyContent: 'flex-end',
        position: "absolute",
        bottom: 0,
        width: '100%',
        justifyContent: "center",
        alignItem: "center",


    },
    iconBottomPosition: {
        height: 80,
        width: 105,
        justifyContent: "center",
        alignItem: "center",
        borderWidth: 2,
        borderColor: "#000",

    },
    iconBottom: {
        height: 70,
        width: 70,
        alignSelf: "center"
    },

    makePostContainer: {
        margin: 10,
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 10,
        padding: 10,
    },
    headerMakePost: {
        flexDirection: "row"
    },
    postButton: {
        borderWidth: 1,
        borderColor: "#000",
        width: "33%",
        padding: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    postButtonContainer: {
        flexDirection: "row"
    },


    postContainer: {
        borderWidth: 1,
        borderColor: "#000",

        margin: 10,
        borderRadius: 10,
        padding: 10
    },
    headerPost: {
        flexDirection: "row",

    },
    avatarImage: {
        width: 40,
        height: 40,
        borderRadius: 45
    },
    postTextHeader: {
        flexDirection: "column",
        marginLeft: 10
    },
    textName: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#000"
    },
    textTime: {
        color: "gray"

    },
    postImage: {
        width: "100%",
        height: 200,
        marginTop: 10,
    },
    likeShareContainer: {
        flexDirection: "row",
        marginTop: 10
    },
    likeShareButton: {
        borderWidth: 1,
        borderColor: "#000",
        width: "50%",
        justifyContent: "center",
        alignItems: "center",
        padding: 10
    },
    likeShare: {
        width: 40,
        height: 40,

    }

});