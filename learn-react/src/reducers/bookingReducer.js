const defaultState = {
    events: [],
    fetching: false,
};

const bookingReducer = (state = defaultState, {type, data}) => {
    switch (type) {
        case 'MOVE_EVENT':
            return {
                ...state,
                fetching: true,
            };
        case 'MOVE_EVENT_SUCCESS':
            return {
                ...state,
                fetching: false,
                events: data
            };
        case 'MOVE_EVENT_FAILURE':
            return {
                ...state,
                fetching: false,
                events: data
            };
        case 'RESIZE_EVENT':
            return {
                ...state,
                fetching: true,
            };
        case 'RESIZE_EVENT_SUCCESS':
            return {
                ...state,
                fetching: false,
                events: data
            };
        case 'RESIZE_EVENT_FAILURE':
            return {
                ...state,
                fetching: false,
                events: data
            };
        case 'NEW_EVENT':
            return {
                ...state,
                fetching: true
            };
        case 'NEW_EVENT_SUCCESS':
            return {
                ...state,
                fetching: false,
                events: data
            };
        case 'NEW_EVENT_FAILURE':
            return {
                ...state,
                fetching: false,
                events: data
            };
        case 'DELETE_EVENT':
            return {
                ...state,
                fetching: true
            };
        case 'DELETE_EVENT_SUCCESS':
            return {
                ...state,
                fetching: false,
                events: data
            };
        case 'DELETE_EVENT_FAILURE':
            return {
                ...state,
                fetching: false,
                events: data
            };
        case 'GET_LIST':
            return {
                ...state,
                fetching: true,
                // events: data
            };
        case 'GET_LIST_SUCCESS':
            return {
                ...state,
                fetching: false,
                events: data
            };
        case 'GET_LIST_FAILURE':
            return {
                ...state,
                fetching: false,
                events: data
            };
        default:
            return state;
    }
};

export default bookingReducer;