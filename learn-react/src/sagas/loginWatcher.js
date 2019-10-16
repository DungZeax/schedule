import { takeEvery, call, put } from 'redux-saga/effects';
import {baseUrlAxios} from '../axiosInstance';
import axios from 'axios';

function loginApi() {
    return axios({
        method: "POST",
        url: baseUrlAxios+"/login"
    });
}

function* login() {
    try{
        const response = yield loginApi();
        const data = response.data;

        yield put({
            type: "LOGIN_SUCCESS",
            data
        });
    } catch (error) {
        yield put({
            type: "LOGIN_FAILURE",
            error
        });
    }
}
export function* watchLogin() {
    yield takeEvery('LOGIN', login);
}