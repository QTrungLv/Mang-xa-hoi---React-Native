import React from 'react';
import { Image, SafeAreaView, Text, View, StyleSheet, Pressable } from 'react-native';

import facebookicon from './../images/facebookicon.jpg'


export default function Home({ navigation }) {

    return (
        <SafeAreaView>
            <View style={styles.imagePosition}>
                <Image style={styles.image} source={facebookicon} />
            </View>
            <View style={styles.textJoinFacebookPosition}>
                <Text style={styles.textJoinFacebook}>Tham gia Facebook</Text>
            </View>
            <View style={styles.textHelpPosition}>
                <Text style={styles.textHelp}>Chúng tôi sẽ giúp bạn tạo tài khoản mới sau vài phút</Text>
            </View>
            <View style={styles.buttonPosition}>
                <Pressable style={styles.nextButton} onPress={() => { navigation.navigate("NameLogin") }}>
                    <Text style={styles.textButton}>
                        Next
                    </Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200
    },
    imagePosition: {
        marginTop: 90,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textJoinFacebook: {
        fontSize: 20,
        fontWeight: "bold",
        color: "blue"
    },
    textJoinFacebookPosition: {
        alignItems: "center",
        marginTop: 20
    },
    textHelp: {
        fontSize: 18,
        textAlign: "center"
    },
    textHelpPosition: {
        marginTop: 10,
        alignContent: "center",
        justifyContent: 'center'
    },
    buttonPosition: {
        marginTop: 10,
        alignItems: "center"
    },
    nextButton: {
        backgroundColor: "blue",
        borderRadius: 8,
        padding: 6,
        width: 150,
        height: 40
    },
    textButton: {
        color: "white",
        textAlign: "center",
        fontSize: 18
    }
})


