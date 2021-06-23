const initFinishReducer = (state = false, action) => {
    switch(action.type) {
        case 'INIT_FINISH_ON':
            return true
        case 'INIT_FINISH_OFF':
            return false
        default:
            return state
    }
}

export default initFinishReducer