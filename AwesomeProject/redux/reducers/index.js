import { combineReducers } from "redux"
import SignInReducer from "./SignInReducer"
import PostReducer from "./PostReducer"
import UserReducer from "./UserReducer"

export default combineReducers({ signIn: SignInReducer, post: PostReducer, user: UserReducer })