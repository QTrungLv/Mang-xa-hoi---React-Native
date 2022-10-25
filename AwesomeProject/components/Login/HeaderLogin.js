import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Pressable,
  Icon,
} from 'react-native';

HeaderLogin = (props) => {
    return (
      <SafeAreaView style={styles.container}>
          <View style={styles.loginHeader}>
            <View style={styles.backButtonPosition}>
              <Pressable>
                <Text style={styles.makeAccountText}>Back</Text>
              </Pressable>
            </View>
            <View style={styles.makeAccountTextPosition}>
              <Text style={styles.makeAccountText}>{props.title}</Text>
            </View>
          </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  loginHeader: {
    display: 'flex',
    backgroundColor: 'white',
    flexDirection: 'row',
    height: 80,
    alignItems: 'center',
  },
  backButtonPosition: {
    paddingLeft: 20,
    padding: 10,
  },
  makeAccountTextPosition: {padding: 10},
  iconBack: {},
  makeAccountText: {
    fontSize: 24,
    color: 'black',
    fontFamily: 'cuchin',
    fontWeight: 'bold',
  },
});

export default HeaderLogin;
