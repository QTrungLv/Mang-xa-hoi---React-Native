const intialState = {
    username: "",
    avatar: "",
    user_id: ""
}

//action: username, password
export default function UserReducer(state = intialState, action) {
    switch (action.type) {
        case "GET_INFO":
            console.log("Payload: ", action.payload)
            return {
                ...state,
                username: action.payload.username,
                avatar: action.payload.avatar,
                user_id: action.payload.user_id

            }
        default: {
            return state
        }
    }
}