const dashboardReducer = (state = true, action) => {
    switch(action.type) {
        case 'OPEN':
            return true
        case 'CLOSE':
            return false
        default:
            return state
    }
}

export default dashboardReducer