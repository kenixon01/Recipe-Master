const INITIAL_STATE = {
  
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'HANDLE_DATA_CHANGE':
        case 'API_CALL':
            return action.payload
        default:
            return state
    }
};

