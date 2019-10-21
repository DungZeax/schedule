import {takeEvery, call, put} from 'redux-saga/effects';
import {baseUrlAxios} from '../axiosInstance';
import axios from 'axios';

function loginApi(param) {
    console.log(JSON.stringify(param));

    return axios.post(baseUrlAxios + '/login', param);
}

function* login(action) {
    try {
        const response = yield call(loginApi, action.param);
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

function logoutApi(param) {
    console.log(JSON.stringify(param));

    return axios.get(baseUrlAxios + '/logout', {
        headers: {
            'Content-Type': "application/json",
            'Authorization': 'bearer ' + localStorage.getItem('token')
        }
    });
}

function* logout(action) {
    try {
        const response = yield call(logoutApi, action.param);
        const data = response.data;

        yield put({
            type: "LOGOUT_SUCCESS",
            data: data
        });
    } catch (error) {
        yield put({
            type: "LOGOUT_FAILURE",
            data: error
        });
    }
}

export function* watchLogin() {
    yield takeEvery('LOGIN', login);
    yield takeEvery('LOGOUT', logout);
}