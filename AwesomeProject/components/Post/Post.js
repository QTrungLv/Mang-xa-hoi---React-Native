import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import likeicon from '../../assets/icon/likeicon.png'
import likedicon from '../../assets/icon/likedicon.png'
import shareicon from '../../assets/icon/shareicon.png'
import avatar from '../../assets/icon/avatar.jpg'
import postImage from '../../assets/icon/postImage.jpg'

//id 
//name - string: Ten nguoi dung dang
//image - array[string]: url cua hinh anh
//video - array[{url, thumb}] : neu ton tai thi la {url, thumb}, khong ton tai thi null
//described - string: Mieu ta
//created - string: thoi gian dang
//like - number: so luong like
//comment - number: so comment
//is_like - string: kiem tra da like
//

export default function Post({ name, image, video = null, described = "Test", created, like, comment, is_like, is_block }) {
    return (
        <View style={styles.postContainer} >
            <View style={styles.headerPost}>
                <Image style={styles.avatarImage} source={avatar} />
                <View style={styles.postTextHeader}>
                    <Text style={styles.textName}>{name}</Text>
                    <Text style={styles.textTime}>{created}</Text>
                </View>
            </View>

            <Text style={styles.description}>{described}</Text>
            <Image source={image} style={styles.postImage} />

            {/** Note 1: Video code for video */}

            <View style={styles.likeShareContainer}>
                <Pressable style={styles.likeShareButton} >
                    {is_like ? <Image source={likedicon} style={styles.likeShare} /> : <Image source={likeicon} style={styles.likeShare} />}

                </Pressable>
                <Pressable style={styles.likeShareButton}>
                    <Image source={shareicon} style={styles.likeShare} />
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    postContainer: {
        borderWidth: 0.5,
        backgroundColor: "white",
        marginTop: 10,
        marginBottom: 10,
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

    },
    description: {
        fontSize: 18,
    }
})