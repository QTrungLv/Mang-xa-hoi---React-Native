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

const Policy = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.intro}>Hoàn tất đăng kí</Text>

      <Text style={styles.text}>
        Bằng cách nhấn vào Đăng ký, bạn đồng ý với Điều Khoản, Chính sách dữ
        liệu và Chính sách cookie của chúng tối, ban có thể nhận được thông báo
        của chúng tôi qua SMS và chọn không nhận bất cứ lúc nào. thông tin tư
        danh bạ của bạn sẽ được tải lển Facebook liên tục để chúng tôi có thể
        gợi ý bạn bè, cung cấp và cải thiện quảng cáo cho bạn và người khác,
        cũng như mang đến dịch vụ tốt hơn.
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.textInButton}>Đăng kí </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Policy;

const left = 27;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signin: {
    fontSize: 30,
    fontWeight: '900',
  },
  intro: {
    margin: 25,
    fontWeight: '700',
    fontSize: 20,
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
    marginLeft: 20,
    marginRight: 20,
    height: 50,
    width: '80%',
    marginTop: 20,
    marginBottom: 10,
  },
  textInButton: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '800',
  },
  text: {
    fontSize: 19,
    margin: 25,
    textAlign: 'center',
  },
});
