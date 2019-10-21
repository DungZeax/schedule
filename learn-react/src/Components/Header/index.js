import React from 'react';
import './header.css';
import {connect} from 'react-redux';

class Header extends React.Component{

    logout = () => {
        this.props.logout();
    };
    render() {
        return (
            <div className="col-md-12">
                <div className="navbar-brand">
                    <a onClick={this.logout}>Đăng Xuất</a>
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
        logout() {
            return dispatch({
                type: 'LOGOUT'
            })
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
