const intialState = {
    username: "",
    password: "",
    user_id: "",
    otp: "",
    isOtpCOnfimred: false,
    isAuthenticated: false
}

const SignInReducer = (state = intialState, payload) => {
    switch (type) {
        case "SIGN_IN":
            return {
                ...state,
                username: payload.username,
                password: payload.password,
                user_id: payload.user_id,
            }
        case "OTP_CONFIRM":
            return{
                ...state,
                otp: payload.otp,
                isAuthenticate,
                isOtpCOnfimred
            }
        default: {
            return state
        }
    }
}

export default SignInReducer