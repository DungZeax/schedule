import {all} from 'redux-saga/effects';
import {watchLogin} from "./loginWatcher";
import {watchBooking} from "./bookingWatcher";

export default function* rootSaga() {
    yield all([
        ...watchLogin(),
        ...watchBooking(),
    ])
}