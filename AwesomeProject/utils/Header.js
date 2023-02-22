import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Header = (token) => {
    
    const header = axios.create({
        headers: {
            'Content-Type': 'multipart/form-data',
            //accept: 'application/json',
            authorization: `Bearer ${token}`
        }
    })
    return header
}