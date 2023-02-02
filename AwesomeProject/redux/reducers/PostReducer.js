const intialState = {
    posts: [],
}
//posts chua idcua post
export default function (state = intialState, action) {
    switch (action.type) {
        case "LOAD_POST":
            return {
                ...state,
                post: [...action.payload.data]
            }
        default: return state
    }

    return state
}