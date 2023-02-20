import React, { useState } from 'react';

import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';

export default function Birthday({ route, navigation }) {
  const { username, password } = route.params;
  const [datePicker, setDatePicker] = useState(false);

  const [date, setDate] = useState(new Date());

  function showDatePicker() {
    setDatePicker(true);
  }

  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);
  }

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <View style={styleSheet.MainContainer}>
        {datePicker && (
          <DateTimePicker
            value={date}
            mode={'date'}
            display={'calendar'}
            is24Hour={true}
            onChange={onDateSelected}
            style={styleSheet.datePicker}
          />
        )}

        {/* {!datePicker && (
          <View style={{margin: 10}}>
            <Button title="Select" color="Blue" onPress={showDatePicker} />
          </View>
        )} */}
      </View>

      <View>
        <Text style={styleSheet.intro}>Sinh nhật của bạn là khi nào?</Text>

        <TouchableOpacity onPress={showDatePicker} style={styleSheet.button}>
          <Text style={styleSheet.textInButton}>Chọn Ngày</Text>
        </TouchableOpacity>
        <Text style={styleSheet.text}>
          {' '}
          Ngày {date.getDate()} Tháng {date.getMonth() + 1} Năm{' '}
          {date.getFullYear()}
        </Text>
        <TouchableOpacity
          style={styleSheet.button}
          onPress={async () => {
            console.log(username, password);

            try {
              const response = await axios.post(
                'http://10.0.2.2:8000/api/register',
                {
                  first_name: 'Fred',
                  last_name: 'Flintstone',
                  username: username,
                  password: password,
                },
              );

              console.log(response.data);

              const user_id = response.data.data.id;
              console.log(user_id);
              navigation.navigate('OtpSignUp', { user_id: user_id });
            } catch (error) {
              console.log(error.response.data);
            }
          }}>
          <Text style={styleSheet.textInButton}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const left = 27;
const styleSheet = StyleSheet.create({
  MainContainer: {
    padding: 20,
    alignItems: 'center',
  },

  text: {
    fontSize: 25,
    color: 'black',
    padding: 3,
    marginBottom: 10,
    textAlign: 'center',
  },

  // Style for iOS ONLY...

  intro: {
    margin: 25,
    fontWeight: '700',
    fontSize: 30,
    color: 'black',
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
});
