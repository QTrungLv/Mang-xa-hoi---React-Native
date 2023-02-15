import { useRef, useState } from "react";
import { SafeAreaView, Text, View, StyleSheet, Pressable, Image } from "react-native";
import blockicon from "../../assets/icon/block.png"

import Dialog from 'react-native-dialog';



export default function ReportPost({ username = "Phạm", navigation }) {

    

    const [showDialog, setShowDialog] = useState(false)
    const [finishDialog, setFinishDialog] = useState(false)

    const showConfirmReport = () => {
        setShowDialog(true)
    }



    const handleOK = () => {
        //Goi Api
        setShowDialog(false)
        setFinishDialog(true)
        try {
            //Call api


        } catch (error) {

        }
    }

    return (
        <View>Report</View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5FCFF",
        margin: 5,
        marginTop: 10

    },
    textHeader: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#000"
    },
    reportButton: {

    }
})