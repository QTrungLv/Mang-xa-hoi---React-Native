import { SIGN_IN } from "./actionTypes";

//content: username, password, userID, image
export const signIn = (content) => {
    return{
        type: SIGN_IN,
        payload: content
    }
}
export const signUp = (content) => {
    return{
        type: SIGN_UP,
        payload: content
    }
}
