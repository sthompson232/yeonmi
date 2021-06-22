const finishReducer = (state = false, action) => {
    switch(action.type) {
        case 'FINISH_ON':
            return true
        case 'FINISH_OFF':
            return false
        default:
            return state
    }
}

export default finishReducer