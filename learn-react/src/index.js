import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import createSagaMiddleware from 'redux-saga';
import { createStore, compose, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import reducers from "./reducers";
import 'bootstrap/dist/css/bootstrap.css';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
let middlewares = applyMiddleware(sagaMiddleware);

const store = createStore(
    reducers,
    compose(middlewares)
);

sagaMiddleware.run(rootSaga);

const Main = (
    <Provider store={store}>
        <App/>
    </Provider>
);
ReactDOM.render(Main, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
