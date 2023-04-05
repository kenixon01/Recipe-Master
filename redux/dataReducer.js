export default (state = [], action) => {
    switch (action.type) {
        case 'HANDLE_DATA_CHANGE':
            return action.payload
        default:
            return state
    }
};

