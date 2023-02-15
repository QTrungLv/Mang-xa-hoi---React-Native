import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Login1 = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <View>
        <View style={styles.top}>
          <Image style={styles.image} source={require('../assets/logo.png')} />
          <Text style={styles.signin}>Sign In</Text>
        </View>
        <Text style={styles.intro}>Hi there! Nice to see you again.</Text>
        <Text style={styles.email}>Email</Text>
        <TextInput style={styles.input} placeholder="example@email.com" />
        <Text style={styles.email}>Password</Text>
        <TextInput style={styles.input} />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('signup');
          }}
          style={styles.button}>
          <Text style={styles.textInButton}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bot}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Bài Viết');
          }}
          style={styles.button}>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>

        <Text style={styles.signup}>Sign Up </Text>
      </View>
    </View>
  );
};

export default Login1;

const left = 27;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  top: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginTop: 35,
    marginBottom: 25,
    width: 136,
    height: 127,
  },
  signin: {
    fontSize: 30,
    fontWeight: '900',
  },
  intro: {
    margin: 25,
    fontWeight: '700',
    fontSize: 20,
    color: '#D5D5D5',
  },
  email: {
    color: '#2B1B1B1',
    marginLeft: left,
    fontWeight: '700',
    fontSize: 20,
    color: '#2196F3',
  },
  input: {
    color: '#2C99FF',
    marginLeft: left,
    marginRight: left,
    marginTop: 0,
    marginBottom: 5,
    fontWeight: '600',
    fontSize: 22,
    borderBottomWidth: 1,
    borderBottomColor: '#D5D5D5',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    backgroundColor: '#2196F3',
    marginLeft: 27,
    marginRight: 27,
    height: 50,
    marginTop: 20,
    marginBottom: 90,
  },
  textInButton: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '800',
  },
  forgot: {
    color: '#909090',
    fontSize: 18,
    marginRight: 27,
    fontWeight: '700',
  },
  signup: {
    marginLeft: 27,
    color: '#2196F3',
    fontSize: 18,
    fontWeight: '700',
  },
  bot: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
