import { DISABLE_BUTTONS, ENABLE_BUTTONS } from "./types";

export const disableButtons = () => {
    return {
        type: DISABLE_BUTTONS
    } 
}

export const enableButtons = () => {
    return {
        type: ENABLE_BUTTONS
    }
}