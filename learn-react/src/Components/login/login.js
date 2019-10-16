import React from 'react';
import './login.css';
import Register from '../register';
import {connect} from 'react-redux';

class Login extends React.Component{

    state = {
        username: '',
        password: ''
    };

    handleChangeLoginData = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.login({
            username: this.state.username,
            password: this.state.password,
        });
    };

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
                                <input type="text"  name='username' className="form-control" id="username" placeholder="Username" value={this.state.username} onChange={this.handleChangeLoginData}/>
                            </div>
                            <div className="form-group">
                                <input type="password" name='password' className="form-control" id="password" placeholder="Password" value={this.state.password} onChange={this.handleChangeLoginData}/>
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

const mapStateToProps = ({loginReducer}) => {
    return {
        ...loginReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        login(param) {
            return dispatch({
                type: 'LOGIN',
                param: param
            })
        }

    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Login);