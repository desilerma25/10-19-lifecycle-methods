

const reducer = (state = {items: [], cart: []}, action) => {
    switch (action.type) {
        case "GOT_ITEM":
            return state
    
        default:
            return state;
    }
}

export default reducer;
