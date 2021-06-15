const forwardsReducer = (state = true, action) => {
    switch(action.type) {
        case 'FORWARDS_TRUE':
            return true
        case 'FORWARDS_FALSE':
            return false
        default:
            return state
    }
}

export default forwardsReducer