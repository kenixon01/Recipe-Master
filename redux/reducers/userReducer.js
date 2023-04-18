export default (state = [], action) => {
    switch (action.type) {
        case 'HANDLE_USER_STATE':
            return action.payload
        default:
            return state
    }
};

