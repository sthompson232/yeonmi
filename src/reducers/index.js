import counterReducer from "./counter";
import forwardsReducer from "./buttons";
import startReducer from "./start";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    counter: counterReducer,
    forwards: forwardsReducer,
    start: startReducer
})

export default rootReducer