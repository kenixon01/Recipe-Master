export default (state = [], action, limit) => {
    switch (action.type) {
        case 'HANDLE_RECENT_SEARCHES':
            state.push(action.payload)
            state = [...new Set(state)]
            if(state.length > limit) state = state.slice(1,limit + 1)
            return state
        default:
            return state
    }
};

