export default (state = false, action) => {
    switch (action.type) {
        case 'API_CALL':
            return !state
        default:
            return state
    }
};

