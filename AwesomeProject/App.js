/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Pressable,
  Icon,
} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <View style={styles.loginHeader}>
            <View style={styles.backButtonPosition}>
              <Pressable>
                <Text style={styles.makeAccountText}>Back</Text>
              </Pressable>
            </View>
            <View style={styles.makeAccountTextPosition}>
              <Text style={styles.makeAccountText}>Tạo tài khoản </Text>
            </View>
          </View>
          <View>
            <Text>Tham gia Facebook</Text>
          </View>
          <View>
            <Text>Chúng tôi sẽ giúp bạn tạo tài khoản mới sau vài phút</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
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

export default App;
