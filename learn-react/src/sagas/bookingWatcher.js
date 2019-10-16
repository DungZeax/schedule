import { takeEvery, call, put } from 'redux-saga/effects';
import {baseUrlAxios} from '../axiosInstance';
import axios from 'axios';

function newEventApi(param) {
    console.log(JSON.stringify(param));

    return axios.post(baseUrlAxios+'/booking/create', param);
}
function* newEvent(action) {
    try{
        const response = yield call(newEventApi,action.param);
        const data = response.data;

        yield put({
            type: "NEW_EVENT_SUCCESS",
            data: data
        });
    } catch (error) {
        yield put({
            type: "NEW_EVENT_FAILURE",
            data: error
        });
    }
}
export function* watchBooking() {
    yield takeEvery('NEW_EVENT', newEvent);
}