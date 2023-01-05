import { SIGN_IN } from "./actionTypes";

//content: username, password, userID, image
export const signIn = content => ({
    type: SIGN_IN,
    payload: {
        content
    } 
})