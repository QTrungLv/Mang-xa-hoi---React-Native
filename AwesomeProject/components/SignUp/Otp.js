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
import React, { useState } from 'react';
import axios from 'axios';
import Dialog from 'react-native-dialog';

const OtpSignUp = ({ route, navigation }) => {
  const { user_id } = route.params;
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('Đã xảy ra lỗi');
  const [visible, setVisible] = useState(false);
  const [success, setSuccess] = useState(false)

  const handleSignUp = async () => {
    console.log(user_id);
    try {
      const response = await axios.post('http://10.0.2.2:8000/api/otp', {
        user_id: user_id,
        otp: otp,
      });
      console.log(response.data);
      setMessage(response.data.message);
      setSuccess(true);
    } catch (error) {
      console.log(error.response.data);
      setMessage(error.response.data.message);
      setVisible(true)
    }

  };

  return (
    <ScrollView>
      <View>
        <View style={styles.top}>
          <Image style={styles.image} source={require('../../assets/logo.png')} />
          <Text style={styles.signin}>Facebook</Text>
        </View>
        <Text style={styles.intro}>Enter your OTP below</Text>

        <Text style={styles.email}>Enter OTP</Text>
        <TextInput
          value={otp}
          onChangeText={value => {
            setOtp(value);
          }}
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.textInButton}>Continue</Text>
        </TouchableOpacity>

      </View>
      <View style={styles.bot}>
        <Text style={styles.forgot}>Need help?</Text>
        <Text style={styles.signup} onPress={() => navigation.navigate("SignIn")}>Sign In</Text>
      </View>

      <Dialog.Container visible={visible}>
        <Dialog.Title> Thông tin</Dialog.Title>
        <Dialog.Description>{message}</Dialog.Description>
        <Dialog.Button label="OK" onPress={() => setVisible(false)} />
      </Dialog.Container>

      <Dialog.Container visible={success}>
        <Dialog.Title> Thông tin</Dialog.Title>
        <Dialog.Description>{message}</Dialog.Description>
        <Dialog.Button label="OK" onPress={() => navigation.navigate("SignIn")} />
      </Dialog.Container>


    </ScrollView>
  );
};

export default OtpSignUp;

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
