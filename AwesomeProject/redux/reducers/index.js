import { combineReducers } from "redux"
import SignInReducer from "./SignInReducer"
import PostReducer from "./PostReducer"
export default combineReducers({ SignInReducer, PostReducer })