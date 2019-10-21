const defaultState = {
    date: new Date()
};

const datePickerReducer = (state = defaultState, {type, data}) => {
    switch (type) {
        case 'ON_CHANGE':
            return {
                ...state,
                date: data
            };
        default:
            return state
    }
};

export default datePickerReducer