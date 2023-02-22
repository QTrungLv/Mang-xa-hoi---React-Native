import { useCallback, useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, Button, StatusBar, Alert } from 'react-native';
import DocumentPicker from "react-native-document-picker"
import AsyncStorage from '@react-native-async-storage/async-storage';

const Example = () => {
    const [fileResponse, setFileResponse] = useState([]);
    const [token, setToken] = useState("")

    useEffect(() => {
        const getToken = async () => {

            const value = await AsyncStorage.getItem("@UserToken")

            if (value != null) {
                setToken(value)

            }
        }
        getToken()
    }, [])

    const handleDocumentSelection = useCallback(async () => {
        try {
            const response = await DocumentPicker.pick({
                presentationStyle: 'fullScreen',
            });
            console.log("response: ", response)
            setFileResponse(response);
        } catch (err) {
            console.warn(err);
        }
    })
    const handleAPI = async () => {
        console.log(fileResponse)
        const formData = new FormData()
        formData.append("token", token)
        formData.append("user_id", 1)
        formData.append("image", fileResponse),
            formData.append("described", "Test Document Picker2")


        await fetch(
            "http://10.0.2.2:8000/api/post/create",
            {
                method: "post",
                body: formData,
                headers: {
                    "Content-Type": "multipart/form-data",
                    authorization: `Bearer ${token}`
                }
            }
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'dark-content'} />
            {fileResponse.map((file, index) => (
                <Text
                    key={index.toString()}
                    style={styles.uri}
                    numberOfLines={1}
                    ellipsizeMode={'middle'}>
                    {file?.uri}
                </Text>
            ))}
            <Button title="Select 📑" onPress={handleDocumentSelection} />
            <Button title="Select2 📑" onPress={handleAPI} />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    uri: {
        fontSize: 14,

    }
});
export default Example;