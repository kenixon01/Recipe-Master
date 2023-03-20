import { combineReducers } from 'redux';

const INITIAL_STATE = {
  data: [],
  possible: []
};

const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'HANDLE_DATA_CHANGE':
        // const data = possible
        return {
            ...state,
            data: state.data,
        }
    default:
      return state
  }
};

export default combineReducers({
  data: dataReducer
});
