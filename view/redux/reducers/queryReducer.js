export default (state = '', action) => {
    switch (action.type) {
        case 'HANDLE_SEARCH':
            return action.payload
        default:
            return state
    }
};
