const startReducer = (state = false, action) => {
    switch(action.type) {
        case 'START':
            return true
        default:
            return state
    }
}

export default startReducer