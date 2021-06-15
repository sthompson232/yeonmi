import { DISABLE_BUTTONS, ENABLE_BUTTONS } from "../actions/types";

const initialState = {
    disableButtons: false,
}

export default function(state = initialState, action) {
    switch(action.type) {
        case DISABLE_BUTTONS:
            return {
                ...state,
                disableButtons: true
            }
        case ENABLE_BUTTONS:
            return {
                ...state,
                disableButtons: false
            }
    }
}