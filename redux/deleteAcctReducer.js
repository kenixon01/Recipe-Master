export default (state = [], action) => {
    switch (action.type) {
        case 'HANDLE_DELETE_ACCT':
            return action.payload
        default:
            return state
    }
};

