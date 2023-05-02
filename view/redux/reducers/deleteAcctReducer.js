export default (state = false, action) => {
    switch (action.type) {
        case 'HANDLE_DELETE_ACCT':
            return !state
        default:
            return state
    }
};

