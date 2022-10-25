import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeRouter, Route, Routes } from 'react-router-native';
import Home from './components/UI/Home';
import Test from './components/UI/Test';

class App2 extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/test" element={<Test />} />
          </Routes>
        </View>
      </NativeRouter>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App2;
