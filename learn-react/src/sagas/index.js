import {all} from 'redux-saga/effects';
import {watchLogin} from "./loginWatcher";

export default function* rootSaga() {
    yield all([
        ...watchLogin(),
    ])
}