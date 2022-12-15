import { createStore, applyMiddleware } from "redux";
import SignInReducer from "../reducers/SignInReducer";

const middleware = { thunk };
export const store = createStore(SignInReducer)