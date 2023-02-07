import { useRef, useState } from "react";
import { SafeAreaView, Text, View, StyleSheet, Pressable, Image } from "react-native";
import blockicon from "../../assets/icon/block.png"

import Dialog from 'react-native-dialog';



export default function ReportPost({ username = "Phạm", navigation }) {

    const Problem = ({ problem, handle }) => {
        const [color, setColor] = useState("lightgray")
        const changeColor = () => {
            if (color === "lightgray") {
                setColor("#2196F3")
                return
            } else {
                setColor("lightgray")
            }
        }
        return (
            <Pressable
                style={[{ backgroundColor: color }, { padding: 10, borderRadius: 10, alignSelf: "flex-start", margin: 5 }]}
                onPress={() => {changeColor()}}
            >
                <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000" }}>
                    {problem}
                </Text>
            </Pressable>
        )
    }
    const [problem1, setProblem1] = useState()
    const [problem2, setProblem2] = useState()

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

    const handleCancel = () => {
        setShowDialog(false)
    }

    const handleFinish = () => {
        setFinishDialog(false)
        navigation.goBack()
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.textHeader}>
                Vui lòng chọn vấn đề của bài viết
            </Text>
            <Text style={{ fontSize: 16, marginBottom: 20 }}>Tối đa: 2 vấn đề</Text>
            <View style={{ flexDirection: "row" }}>
                <Problem problem="Ảnh khỏa thân" />
                <Problem problem="Bạo lực" />
                <Problem problem="Quấy rối" />
            </View>
            <View style={{ flexDirection: "row" }}>
                <Problem problem="Tự tử/Tự gây thương tích" />
                <Problem problem="TIn giả" />
                <Problem problem="Spam" />
            </View>
            <View style={{ flexDirection: "row" }}>
                <Problem problem="Bán hàng trái phép" />
                <Problem problem="Ngôn từ gây thù ghét" />
            </View>
            <View style={{ flexDirection: "row" }}>
                <Problem problem="Khủng bố" />
                <Problem problem="Vấn đề khác" />
            </View>

            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    marginTop: 20,
                    marginBottom: 20
                }}
            />

            <View>
                <Text style={styles.textHeader}>
                    Nội dung chi tiết báo cáo
                </Text>

                <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? "lightgray" : "#F5FCFF" }, { marginTop: 20 }]}>
                    <View style={{ flexDirection: "row" }} >
                        <Image style={{ width: 50, height: 50 }} source={blockicon} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ color: "#000", fontSize: 18, fontWeight: "600", marginBottom: 5 }}>Chặn {username}</Text>
                            <Text>Các bạn sẽ không thể nhìn thấy hay liên lạc với nhau</Text>
                        </View>
                    </View>
                </Pressable>

                <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? '#4267B2' : '#2196F3' }, styles.button]} onPress={showConfirmReport} >
                    <Text>
                        Báo cáo
                    </Text>
                </Pressable>
            </View>

            <Dialog.Container visible={showDialog}>
                <Dialog.Title>Gửi báo cáo</Dialog.Title>
                <Dialog.Description>
                    <View>
                        <Text style={{ fontSize: 18, color: "#000" }}>
                            Bạn có chắc chắn muốn báo cáo {"\n"}{username} với lí do:
                        </Text>
                        {problem1 ? <Problem problem={problem1} /> : <></>}
                        {problem2 ? <Problem problem={problem2} /> : <></>}
                    </View>
                </Dialog.Description>
                <Dialog.Button label="Đồng ý" onPress={handleOK} />
                <Dialog.Button label="Hủy" onPress={handleCancel} />
            </Dialog.Container>

            <Dialog.Container visible={finishDialog}>
                <Dialog.Description>
                    Báo cáo thành công
                </Dialog.Description>
                <Dialog.Button label="Xác nhận" onPress={handleFinish} />
            </Dialog.Container>



        </SafeAreaView>
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