const intialState = {
    user: [],
}
//action: username, password, userID, image
export default function(state = intialState, action) {
    switch (action.type) {
        case "SIGN_IN":
            console.log("Reducer")
            const newUser = { username: action.username, password: action.password }
            return {
                ...state,
                user: [...user, newUser],
            }
        default: {
            return state
        }
    }
}