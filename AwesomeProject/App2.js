import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';


// You can import from local files


// or any pure javascript modules available in npm


export default function App2() {
    const [state, setState] = React.useState("Hellow")

    return (
        <View>
            <Text onPress={() => setState("update")}>{state}</Text>
        </View>
    )

}