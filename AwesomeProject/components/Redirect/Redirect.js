import React from 'react';
import { ScrollView, StyleSheet, Button, Text, Pressable } from 'react-native';

export default function Redirect({ navigation }) {
    return (
        <ScrollView >
            <Pressable style={styles.button} onPress={() => navigation.navigate("HomePage")}>
                <Text>
                    HomePage
                </Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => navigation.navigate("Make Account")}>
                <Text>
                    StartSignUp
                </Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => navigation.navigate("SignIn")}>
                <Text>
                    Sign In
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
        width: 100,
        height: 30,
        borderRadius: 10,
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        shadowOpacity: 0.3,
        color: "blue"
    }
})