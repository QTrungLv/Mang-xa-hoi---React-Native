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


export default function MakePost({ navigation }) {

    const [havePost, setHavePost] = useState(false)

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
    let data = new FormData()
    data.append('image',
        {
            uri: uriImage,
            name: "",
            type: ""
        })

    const refRBSheet = useRef()

    // const selectFile = async () => {
    //     // Opening Document Picker to select one file
    //     try {
    //         const res = await DocumentPicker.pick({
    //             // Provide which type of file you want user to pick
    //             type: [DocumentPicker.types.allFiles],
    //             // There can me more options as well
    //             // DocumentPicker.types.allFiles
    //             // DocumentPicker.types.images
    //             // DocumentPicker.types.plainText
    //             // DocumentPicker.types.audio
    //             // DocumentPicker.types.pdf
    //         });
    //         // Printing the log realted to the file
    //         console.log('res : ' + JSON.stringify(res));
    //         // Setting the state to show single file attributes
    //         setSingleFile(res);
    //     } catch (err) {
    //         setSingleFile(null);
    //         // Handling any exception (If any)
    //         if (DocumentPicker.isCancel(err)) {
    //             // If user canceled the document selection
    //             alert('Canceled');
    //         } else {
    //             // For Unknown Error
    //             alert('Unknown Error: ' + JSON.stringify(err));
    //             throw err;
    //         }
    //     }
    // };

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
                console.log("numOfPicture ", numOfPictures)
                const item = { key: numOfPictures, uri: response.assets[0].uri }
                setUriImage([...uriImage, item]);
                console.log(uriImage)
            }
        });
    };

    const handlerPost = async () => {
        try {
            //Call api
            console.log("Post")

        } catch (error) {
            console.log(error)
        }
    }

    //Note 2
    function handlerGoBack() {
        havePost ? refRBSheet.current.open() : navigation.goBack()
    }





    useEffect(() => {
        description ? setPostButtonDisabled(true) : setPostButtonDisabled(false)
    }, [description])

    useEffect(() => {
        numOfPictures > 0 ? setPostButtonDisabled(true) : setPostButtonDisabled(false)
    }, [numOfPictures])


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <Pressable
                    style={styles.goBackPosition}
                    onPress={handlerGoBack}
                >
                    <Image source={goBack} style={styles.iconGoBack} />
                </Pressable>
                <Text style={styles.headerText}>Tạofffffffgf bài viết</Text>
                {postButtonDisabled ?
                    <Pressable
                        onPress={() => { handlerPost }}
                        style={({ pressed }) => [{ backgroundColor: pressed ? "#4267B2" : "#2196F3" }, styles.buttonPost]}
                    >
                        <Text style={[{ color: "#fff" }, styles.textButtonPost]}>ĐĂNG</Text>
                    </Pressable>
                    : <></>}


            </View>
            <View style={{ borderWidth: 0.3, borderBottomColor: "#D9D9D9" }}></View>
            <View style={styles.post}>
                <View style={styles.headerPost}>
                    <Image style={styles.avatarImage} source={avatar} />
                    <View style={styles.personalPost}>
                        <Text style={styles.namePost}>Quang Trung</Text>
                        <Text style={styles.publicPost}>Public</Text>
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

            <View style={{ flexDirection: "row" }}>
                {uriImage.map((item) => {
                    return (
                        <Image source={{ uri: item.uri }} style={{ width: 150, height: 150 }} key={item.key} />
                    )
                })}
            </View>
            {/* {
                numOfPictures !== 0 ? <SectionList
                contentContainerStyle={{ paddingHorizontal: 10 }}
                stickySectionHeadersEnabled={false}
                sections={uriImage}
                renderItem={({ key, uri }) => {
                    return <Image source={{ uri: uri }} style={{ width: 150, height: 150 }} key={key} />
                }}
            /> : <></>
            } */}


            
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
                    <Text style={styles.bottomSheetTitleButton}>Bạn muốn hoàn thành bài viết sau?</Text>
                    <Text style={{ marginLeft: 20 }}>Lưu bản nháp hoặc tiếp tục chỉnh sửa</Text>
                </View>

                <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? "#D9D9D9" : "white" }, styles.bottomSheetButton]} onPress={() => { }}>
                    <Image source={drafticon} style={styles.buttomSheetIconButton} />
                    <Text style={styles.buttomSheetTextButton}>Lưu làm bản nháp</Text>
                </Pressable>
                <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? "#D9D9D9" : "white" }, styles.bottomSheetButton]} onPress={() => { }}>
                    <Image source={trashicon} style={styles.buttomSheetIconButton} />
                    <Text style={styles.buttomSheetTextButton}>Bỏ bài viết</Text>
                </Pressable>
                <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? "#D9D9D9" : "white" }, styles.bottomSheetButton]} onPress={() => { }}>
                    <Image source={drafticon} style={styles.buttomSheetIconButton} />
                    <Text style={styles.buttomSheetTextButton2}>Tiếp tục chỉnh sửa</Text>
                </Pressable>

            </RBSheet>


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