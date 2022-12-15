import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HomePage() {
    return (
        <View>
            <Text style={{ fontSize: 32, fontWeight: "bold" }}>
                HomePage
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    font: {
        fontSize: 32,
        fontWeight: "bold"
    }
})