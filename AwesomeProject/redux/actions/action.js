import { SIGN_IN } from "./actionTypes";

//content: username, password, userID, image
export const signIn = (content) => {
    console.log("Action")
    return{
        type: SIGN_IN,
        payload: content
    }
}