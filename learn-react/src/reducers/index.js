import {combineReducers} from "redux";
import loginReducer from "./loginReducer";
import bookingReducer from "./bookingReducer";

const reducers = combineReducers({
    loginReducer,
    bookingReducer
});

export default reducers;