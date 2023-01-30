import React from 'react';
import searchicon from '../../assets/icon/searchicon.png'
import { TextInput, View, Image, StyleSheet } from 'react-native';

export default function SearchHeader() {
    return (
        <View style={styles.searchTop}>
            <Image
                source={searchicon}
                style={styles.imageStyle}
            />
            <TextInput
                style={{ flex: 1 }}
                placeholder="Search"
                underlineColorAndroid="transparent"
            />
        </View>
    )
}
const styles = StyleSheet.create({
    searchTop: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 20,
        height: 60,
        borderRadius: 5,
        margin: 10,
    },
    imageStyle: {
        padding: 10,
        margin: 5,
        height: 40,
        width: 40,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
})