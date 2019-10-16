import { takeEvery, call, put } from 'redux-saga/effects';
import {baseUrlAxios} from '../axiosInstance';
import axios from 'axios';

function loginApi(param) {
    console.log(JSON.stringify(param));

    return axios.post(baseUrlAxios+'/login', param);
    // return axios({
    //     method: "POST",
    //     url: baseUrlAxios+"/login"
    // });
}

function* login(action) {
    try{
        const response = yield call(loginApi,action.param);
        const data = response.data;

        yield put({
            type: "LOGIN_SUCCESS",
            data: data
        });
    } catch (error) {
        yield put({
            type: "LOGIN_FAILURE",
            data: error
        });
    }
}
export function* watchLogin() {
    yield takeEvery('LOGIN', login);
}