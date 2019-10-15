import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Login from './Components/login/login';
import Schedule from './Components/booking/booking';

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
