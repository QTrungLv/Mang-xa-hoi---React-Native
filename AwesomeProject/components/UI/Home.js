import React from 'react';
import { SafeAreaView, Text, StyleSheet, Image } from 'react-native';
import HeaderLogin from "../Login/HeaderLogin"
import StartLogin from '../Login/StartLogin';


class Home extends React.Component {
    render() {
        return (
            <SafeAreaView>
                <HeaderLogin title="Tạo tài khoản" />
                <StartLogin />
            </SafeAreaView>
        );
    }
}

export default Home;
