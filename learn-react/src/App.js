import React, {Fragment, Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Login from './login/login';
import Schedule from './booking/booking';

function App() {
    return (
        /* <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div> */
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
