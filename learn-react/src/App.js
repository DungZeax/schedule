import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Login from './Components/login/login';
import Schedule from './Components/booking/booking';
import { connect }  from "react-redux";

function App({ isAuth }) {
    const redirectLogin = (Component) => {
        return isAuth ? <Component/> : <Login/>;
    };

    return (
        <Fragment>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        {redirectLogin(Schedule)}
                    </Route>
                    <Route path="/booking">
                        {redirectLogin(Schedule)}
                    </Route>
                </Switch>
            </Router>
        </Fragment>
    );
}

const mapStateToProps = ({ loginReducer }) => {
    const { isAuth } = loginReducer;
    const token  = localStorage.getItem('token');
    return {
        isAuth: isAuth || token
    }
}

export default connect(mapStateToProps)(App);
