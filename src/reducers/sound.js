const soundReducer = (state = true, action) => {
    switch(action.type) {
        case 'SOUND_ON':
            return true
        case 'SOUND_OFF':
            return false
        default:
            return state
    }
}

export default soundReducer