export default (state = '', action) => {
    switch (action.type) {
        case 'HANDLE_NAME':
            return action.payload
        default:
            return state
    }
};