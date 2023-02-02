const intialState = {
    user: [],
    token: "",
    id: ""
}

//action: username, password
export default function SignInReducer(state = intialState, action) {
    switch (action.type) {
        case "SIGN_IN":
            const newUser = { username: action.payload.username, password: action.payload.password }
            return {
                ...state,
                user: newUser,
                token: action.payload.token,
                id: action.payload.id
            }
        default: {
            console.log("Default - SI")
            return state
        }
    }
}