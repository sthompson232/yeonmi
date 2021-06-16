import counterReducer from "./counter";
import forwardsReducer from "./buttons";
import startReducer from "./start";
import soundReducer from "./sound";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    counter: counterReducer,
    forwards: forwardsReducer,
    start: startReducer,
    sound: soundReducer
})

export default rootReducer