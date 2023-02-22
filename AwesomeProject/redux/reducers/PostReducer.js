import { GET_POST } from "../actions/actionTypes"

const intialState = {
    posts: [],
}
//posts chua idcua post
export default function (state = intialState, action) {
    switch (action.type) {
        case GET_POST:
            console.log("Data: ", action.payload.data)
            return {          
                ...state,
                post: action.payload.data
            }
        default: return state
    }

    return state
}