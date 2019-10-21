import { takeEvery, call, put } from 'redux-saga/effects';
import {baseUrlAxios} from '../axiosInstance';
import axios from 'axios';

function newEventApi(param) {
    console.log('new event param', JSON.stringify(param));
    param.start = param.start.getFullYear() + '-' + (param.start.getMonth()+1) + '-' + param.start.getDate() + ' '
        + param.start.getHours() + ':' + param.start.getMinutes() + ':' + param.start.getSeconds();
    param.end = param.end.getFullYear() + '-' + (param.end.getMonth()+1) + '-' + param.end.getDate() + ' '
        + param.end.getHours() + ':' + param.end.getMinutes() + ':' + param.end.getSeconds();

    return axios.post(baseUrlAxios+'/booking/create', param,{
        headers: {
            'Content-Type': "application/json",
                'Authorization': 'bearer ' + localStorage.getItem('token')
        }
    });
}
function* newEvent(action) {
    try{
        const response = yield call(newEventApi,action.param);
        const data = response.data;
        data.data.forEach(function (event) {
            event.start = new Date(event.start);
            event.end = new Date(event.end);
        });
        console.log('new event success data', data);

        yield put({
            type: "NEW_EVENT_SUCCESS",
            data: data.data
        });
    } catch (error) {
        yield put({
            type: "NEW_EVENT_FAILURE",
            data: error
        });
    }
}

function moveEventApi(param) {
    console.log('move event param', JSON.stringify(param));
    param.start = param.start.getFullYear() + '-' + (param.start.getMonth()+1) + '-' + param.start.getDate() + ' '
        + param.start.getHours() + ':' + param.start.getMinutes() + ':' + param.start.getSeconds();
    param.end = param.end.getFullYear() + '-' + (param.end.getMonth()+1) + '-' + param.end.getDate() + ' '
        + param.end.getHours() + ':' + param.end.getMinutes() + ':' + param.end.getSeconds();

    return axios.post(baseUrlAxios+'/booking/update/{' + param.id + '}', param,{
        headers: {
            'Content-Type': "application/json",
            'Authorization': 'bearer ' + localStorage.getItem('token')
        }
    });
}
function* moveEvent(action) {
    try{
        const response = yield call(moveEventApi,action.param);
        const data = response.data;
        data.data.forEach(function (event) {
            event.start = new Date(event.start);
            event.end = new Date(event.end);
        });
        console.log('move event success data', data);

        yield put({
            type: "MOVE_EVENT_SUCCESS",
            data: data.data
        });
    } catch (error) {
        yield put({
            type: "MOVE_EVENT_FAILURE",
            data: error
        });
    }
}

function getListApi() {

    return axios.get(baseUrlAxios+'/booking', {
        headers: {
            'Content-Type': "application/json",
            'Authorization': 'bearer ' + localStorage.getItem('token')
        }
    });
}

function* getList(action) {
    try {
        const response = yield call(getListApi);
        const data = response.data;

        data.data.forEach(function (event) {
            event.start = new Date(event.start);
            event.end = new Date(event.end);
        });

        yield put({
            type: "GET_LIST_SUCCESS",
            data: data.data
        });
    } catch (error) {
        yield put({
            type: "GET_LIST_FAILURE",
            data: error
        })
    }
}
export function* watchBooking() {
    yield takeEvery('NEW_EVENT', newEvent);
    yield takeEvery('GET_LIST', getList);
    yield takeEvery('MOVE_EVENT', moveEvent);
}