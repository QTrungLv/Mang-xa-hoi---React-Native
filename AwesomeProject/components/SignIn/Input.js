import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, View, Text } from 'react-native';

export default function InputSignIn() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.whatNamePosition}>
                <Text style={styles.whatNameText}>
                    Bạn tên gì?
                </Text>
            </View>
            <View style={styles.nameInputPosition}>
                <View style={styles.preNamePosition}>
                    <Text style={styles.preNameText}>
                        Họ
                    </Text>
                    <TextInput style={styles.preNameInput} placeholder="VD: Nguyễn Quang" />

                </View>
                <View style={styles.lastNamePosition}>
                    <Text style={styles.lastNameText}>
                        Tên
                    </Text>
                    <TextInput style={styles.lastNameInput} placeholder="VD: Trung" />
                </View>
            </View>

        </SafeAreaView>
    )
}


//Design cho name input
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    //Text: Ban ten gi
    whatNamePosition: {
        
    },
    whatNameText: {

    },
    //Cho Ho input va Ten input
    nameInputPosition: {
        flexDirection: 'row',
    },
    //Cho Ho Input
    preNamePosition: {

    },
    preNameText: {

    },
    preNameInput: {

    },
    //Cho Ten Input
    lastNamePosition: {

    },
    lastNameText: {

    },
    lastNameInput: {

    }
})