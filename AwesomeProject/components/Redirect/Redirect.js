import React from 'react';
import { ScrollView, StyleSheet, Button, Text, Pressable, Touchable, TouchableOpacity } from 'react-native';

export default function Redirect({ navigation }) {
    return (
        <ScrollView >
            <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? "blue" : "white" }, styles.button]}
                onPress={() => navigation.navigate("Tab")}>
                <Text>
                    HomePage
                </Text>
            </Pressable>
            <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? "blue" : "white" }, styles.button]}
                onPress={() => navigation.navigate("SignUp")}>
                <Text>
                    Sign Up
                </Text>
            </Pressable>
            <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? "blue" : "white" }, styles.button]}
                onPress={() => navigation.navigate("SignIn")}>
                <Text>
                    Sign In
                </Text>
            </Pressable>
            <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? "blue" : "white" }, styles.button]}
                onPress={() => navigation.navigate("MakePost")}>
                <Text>
                    Make Post
                </Text>
            </Pressable>
            <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? "blue" : "white" }, styles.button]}
                onPress={() => navigation.navigate("Otp")}>
                <Text>
                    OTP
                </Text>
            </Pressable>
            <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? "blue" : "white" }, styles.button]}
                onPress={() => navigation.navigate("ReportPost")}>
                <Text>
                    Report Post
                </Text>
            </Pressable>
            <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? "blue" : "white" }, styles.button]}
                onPress={() => navigation.navigate("PersonalPage")}>
                <Text>
                    Personal Page
                </Text>
            </Pressable>
            <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? "blue" : "white" }, styles.button]}
                onPress={() => navigation.navigate("Feed")}>
                <Text>
                    Feed
                </Text>
            </Pressable>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around"
    },
    button: {
        marginTop: 20,
        width: 300,
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        shadowOpacity: 0.3,
        color: "blue",
    }
})