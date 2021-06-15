import counterReducer from "./counter";
import forwardsReducer from "./buttons";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    counter: counterReducer,
    forwards: forwardsReducer
})

export default rootReducer