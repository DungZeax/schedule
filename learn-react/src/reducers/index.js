import {combineReducers} from "redux";
import loginReducer from "./loginReducer";
import bookingReducer from "./bookingReducer";
import datePickerReducer from "./datePickerReducer";

const reducers = combineReducers({
    loginReducer,
    bookingReducer,
    datePickerReducer
});

export default reducers;