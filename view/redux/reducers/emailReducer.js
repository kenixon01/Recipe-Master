export default (state = '', action) => {
    switch (action.type) {
        case 'HANDLE_USER_STATE':
        case 'HANDLE_EMAIL':
            return action.payload
        default:
            return state
    }
};