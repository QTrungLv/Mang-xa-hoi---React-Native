const intialState = {
    name: "",
    avatarUrl: "",
    coverUrl: "",
    address: "",
}

//action: username, password
export default function UserReducer(state = intialState, action) {
    switch (action.type) {
        case "GET_INFO":
            console.log(action.payload)
            return {
                ...state,
                name: action.payload.name,
                avatarUrl: action.payload.avatarUrl,
                coverUrl: action.payload.coverUrl,
                address: action.payload.address
            }
        default: {
            return state
        }
    }
}