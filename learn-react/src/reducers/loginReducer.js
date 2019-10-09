const defaultState = {
    username: '',
    password: '',
    isAuth: false,
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
                isAuth: true
            };
        default:
            return state;
    }
};
export default loginReducer;