import * as React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import Example from './components/Example';
import TestUpload from './components/TestUploadFirebase';


// You can import from local files


// or any pure javascript modules available in npm


export default function App2() {
    const [state, setState] = React.useState("Hellow")

    return (
        <>
            <Example />
        </>
    )

}