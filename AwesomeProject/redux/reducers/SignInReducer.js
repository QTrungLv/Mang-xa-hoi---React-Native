const intialState = {
    user: [],
}

//action: username, password
export default function SignInReducer(state = intialState, action) {
    switch (action.type) {
        case "SIGN_IN":
            console.log("User", state.user)
            console.log("Action", action)
            const newUser = { username: action.payload.username, password: action.payload.password }
            return {
                ...state,
                user: newUser
            }
        default: {
            console.log("Default - SI")
            return state
        }
    }
}