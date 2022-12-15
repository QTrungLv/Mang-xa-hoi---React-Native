import { Children, createContext, useContext } from "react";
import axios from 'axios'
import { BASE_URL } from "../constrants/Constrant";
import SignInReducer from "../reducers/SignInReducer";

export const SignInContext = createContext()

const SignInContextProvider = ({ children }) => {
    const [state, dispatch] = useContext(SignInReducer, {
        isAuthenticated: false,
        isOtpConfirmed: false,
        data: null
    })

    const SignIn = async (signInForm) => {
        console.log(`${BASE_URL}/api/SignIn?username=${signInForm.username}"&password="${signInForm.password}`)
        const response = await axios.post(`${BASE_URL}username=${signInForm.username}"&password="${signInForm.password}`)
        try {
            if (response.data.success) {

                dispatch({
                    type: "ADD_SIGN_IN",
                    payload: { isAuthenticated: false, data: response.data.data }
                })
            }
            return response.data
        } catch (error) {

        }
    }

    const otpConfirmed = async (otpForm) => {
        const response = await axios.post(`${BASE_URL}/api/otp/user_id=${otpForm.id}&otp=${utpForm.otp}`)
    }

    const SignInContextData = { SignIn }

    return (
        <SignInContext.Provider value={SignInContextData} >
            {children}
        </SignInContext.Provider>
    )
}

export default SignInContextProvider