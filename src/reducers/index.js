import { combineReducers } from "redux";
import counterReducer from "./counter";
import forwardsReducer from "./buttons";
import startReducer from "./start";
import soundReducer from "./sound";
import dashboardReducer from "./dashboard";
import finishReducer from "./finish";

const rootReducer = combineReducers({
    counter: counterReducer,
    forwards: forwardsReducer,
    start: startReducer,
    sound: soundReducer,
    dashboard: dashboardReducer,
    finish: finishReducer
})

export default rootReducer