import events from "../events";

const defaultState = {
    events: events
};

const bookingReducer = (state = defaultState, {type, detail}) => {
    switch (type) {
        case 'MOVE_EVENT':
            return {
                ...state,
                ...detail
            };
        case 'RESIZE_EVENT':
            return {
                ...state,
                ...detail
            }
        case 'NEW_EVENT':
            return {
                ...state,
                ...detail
            }
        default:
            return state;
    }
};

export default bookingReducer;