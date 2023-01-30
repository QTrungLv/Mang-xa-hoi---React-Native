import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, SafeAreaView, Pressable, ScrollView } from 'react-native';
import searchicon from '../../assets/icon/searchicon.png'
import homeicon from '../../assets/icon/homeicon.png'
import messageicon from '../../assets/icon/messageicon.jpg'
import notifyicon from '../../assets/icon/notifyicon.png'
import navbaricon from '../../assets/icon//baricon.png'
import avatar from '../../assets/icon//avatar.jpg'
import postImage from '../../assets/icon//postImage.jpg'
import likeicon from '../../assets/icon//likeicon.png'
import shareicon from '../../assets/icon//shareicon.png'
import likedicon from '../../assets/icon//likedicon.png'
import SearchHeader from './SearchHeader';

import Post from '../Post/Post';


export default function HomePage({ navigation }) {

    const [like, setLike] = useState("likeicon")

    return (
        <ScrollView style={styles.container}>
            <SearchHeader />

            <Pressable style={styles.makePostContainer} onPress={() => navigation.navigate("MakePost")}>
                <View styles={styles.headerMakePost}>
                    <Image style={styles.avatarImage} source={avatar} />
                    <Text style={{ height: 40, marginTop: 5 }}>How are you today?</Text>
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
            </Pressable>

            <Post name="Quang Trung" image={postImage} created="An hour go" is_like={false} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5FCFF"
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
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 0.5,
        backgroundColor: "white",
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
    avatarImage: {
        width: 40,
        height: 40,
        borderRadius: 45
    },



});