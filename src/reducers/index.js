import { combineReducers } from "redux";
import counterReducer from "./counter";
import forwardsReducer from "./buttons";
import startReducer from "./start";
import soundReducer from "./sound";
import dashboardReducer from "./dashboard";
import finishReducer from "./finish";
import durationReducer from "./duration";

const rootReducer = combineReducers({
    counter: counterReducer,
    forwards: forwardsReducer,
    start: startReducer,
    sound: soundReducer,
    dashboard: dashboardReducer,
    finish: finishReducer,
    duration: durationReducer
})

export default rootReducer