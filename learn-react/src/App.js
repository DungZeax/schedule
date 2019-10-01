import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Login from './login/login';
import Schedule from './booking/booking';

function App() {
    return (
        <Fragment>
            <Router>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/booking" component={Schedule} />
                </Switch>
            </Router>
        </Fragment>
    );
}

export default App;
