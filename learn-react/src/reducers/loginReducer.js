const defaultState = {
    username: '',
    password: '',
    fetching: false,
    isAuth: false,
    error: null,
};

const loginReducer = (state = defaultState, { type, detail }) => {
    switch (type) {
        case 'CHANGE_DATA_LOGIN':
            return {
                ...state,
                ...detail
            };
        case 'LOGIN':
            return {
                ...state,
                fetching: true,
            };
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                fetching: false,
                isAuth: true
            };
        case 'LOGIN_FAILURE':
            return {
                ...state,
                fetching: false,
                error: 'login failed'
            }
        default:
            return state;
    }
};
export default loginReducer;