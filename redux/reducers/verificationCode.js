export default (state = [], action) => {
    switch (action.type) {
        case 'HANDLE_VERIFICATION_CODE':
            return action.payload
        default:
            return state
    }
};

