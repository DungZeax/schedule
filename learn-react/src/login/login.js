import React from 'react';
import './login.css';
import Register from '../register';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {name: '', password: ''};
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangeName(event) {
        this.setState({name: event.target.value});
    }

    handleChangePassword(event) {
        this.setState({password: event.target.value});
    }
    
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.name + ', ' + this.state.password);
        event.preventDefault();
    }
    render() {
        return (
            <div className="container">
                <div className="row" id="login" >
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <br /><br /><br />
                        <div className="row">
                            <h1>Meeting Room Booking</h1>
                        </div>
                        <br /><br /><br />
                        <form method="POST" name="frm_login" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input type="text" className="form-control" id="username" placeholder="Username" value={this.state.value} onChange={this.handleChangeName}/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" id="password" placeholder="Password" value={this.state.value} onChange={this.handleChangePassword}/>
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" name="save_login" value="0" /> Keep me logged in
                            </label>
                            </div>
                            <input className="btn btn-success" type="submit" value="Login" />
                            <button type="button" className="btn btn-link" id="forgotpass">Forgot password?</button>
                            <button type="button" className="btn btn-link" id="register" onClick={Register}><b><u>Register</u></b></button>
                        </form>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        )
    }
}

export default Login;