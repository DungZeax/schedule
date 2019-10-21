const defaultState = {
    response: {},
    fetching: false,
    isAuth: false,
    error: null,
};

const loginReducer = (state = defaultState, { type, data }) => {
    switch (type) {
        case 'LOGIN':
            return {
                ...state,
                fetching: true,
            };
        case 'LOGIN_SUCCESS':
            console.log(data);
            localStorage.setItem('token', data.access_token);
            return {
                ...state,
                fetching: false,
                isAuth: true,
                response: data
            };
        case 'LOGIN_FAILURE':
            return {
                ...state,
                fetching: false,
                response: data
            };
        case 'LOGOUT':
            return {
                ...state,
                fetching: true,
            };
        case 'LOGOUT_SUCCESS':
            console.log(data);
            localStorage.removeItem('token');
            return {
                ...state,
                fetching: false,
                isAuth: false,
                response: data
            };
        case 'LOGOUT_FAILURE':
            return {
                ...state,
                fetching: false,
                response: data
            };
        default:
            return state;
    }
};
export default loginReducer;