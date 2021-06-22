const startReducer = (state = false, action) => {
    switch(action.type) {
        case 'START':
            return true
        case 'RESTART':
            return false
        default:
            return state
    }
}

export default startReducer