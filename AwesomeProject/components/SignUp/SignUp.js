import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');

  const [error, setError] = useState('');
  const [errorpassword, setErrorPassword] = useState('');
  const [errorconfirmedpassword, setErrorConfirmedPassword] = useState('');

  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <View>
        <View style={styles.top}>
          <Text style={styles.signup}>Sign Up</Text>
        </View>
        <Text style={styles.intro}>Welcome Back! </Text>
        <Text style={styles.email}>Email</Text>

        <TextInput
          style={styles.input}
          placeholder="example@email.com"
          value={email}
          onChangeText={value => {
            setEmail(value);
          }}
          onEndEditing={() => {
            email.length < 7
              ? setError('Email is Invalid!')
              : setError('Email is valid');
          }}
        />
        <Text
          style={error === 'Email is Invalid!' ? styles.error : styles.valid}>
          {' '}
          {error}
        </Text>
        {/* <Text style={styles.email}>Full Name</Text>
        <TextInput style={styles.input} placeholder="John Ashes" />
        <Text style={styles.email}>Age</Text>
        <TextInput style={styles.input} /> */}
        <Text style={styles.email}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={value => {
            setPassword(value);
          }}
          onEndEditing={() => {
            password.length < 7
              ? setErrorPassword('Password require at least 7 character!')
              : setErrorPassword('Password is valid');
          }}
        />
        <Text
          style={
            errorpassword === 'Password require at least 7 character!'
              ? styles.error
              : styles.valid
          }>
          {errorpassword}
        </Text>
        <Text style={styles.email}>Cofirm Password</Text>
        <TextInput
          style={styles.input}
          value={confirmedPassword}
          onChangeText={value => {
            setConfirmedPassword(value);
          }}
          onEndEditing={() => {
            confirmedPassword.length === 0
              ? setErrorConfirmedPassword('Vui lòng điền vào trường này')
              : confirmedPassword === password
              ? setErrorConfirmedPassword('Confirmed password match')
              : setErrorConfirmedPassword('Confirmed password not match');
          }}
          hidden
        />
        <Text
          style={
            errorconfirmedpassword === 'Confirmed password not match'
              ? styles.error
              : styles.valid
          }>
          {errorconfirmedpassword}
        </Text>
        <TouchableOpacity
          onPress={async () => {
            navigation.navigate('Ngày Sinh', {
              username: email,
              password: password,
            });
          }}
          style={styles.button}>
          <Text style={styles.textInButton}>Continue</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bot}>
        <Text style={styles.forgot}>Have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.signin}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const left = 50;
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
  signup: {
    marginTop: 30,
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
    marginTop: 10,
    fontWeight: '700',
    fontSize: 20,
    color: '#2196F3',
  },
  error: {
    color: 'red',
  },
  valid: {
    color: 'green',
  },
  input: {
    color: '#2C99FF',
    marginLeft: left,
    marginRight: left,
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
    marginBottom: 40,
  },
  textInButton: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '800',
  },
  forgot: {
    color: '#909090',
    fontSize: 18,
    marginLeft: 90,
    fontWeight: '700',
  },
  signin: {
    marginLeft: 5,
    color: '#2196F3',
    fontSize: 18,
    fontWeight: '700',
  },
  bot: {
    flexDirection: 'row',
    marginTop: 110,
  },
});

export default function SignUp(){
    return(
        <ScrollView>
            <View>
                <Text>
                    Sign Up
                </Text>
            </View>
        </ScrollView>
    )
}