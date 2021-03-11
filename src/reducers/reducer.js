const reducer = (state = {items: [], cart: []}, action) => {
    switch (action.type) {
        case "GOT_ITEMS":
            console.log(action)
            return {...state, items: action.payload}
    
        default:
            return state;
    }
}

export default reducer;
