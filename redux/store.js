import { createStore, combineReducers } from 'redux';
import DataReducer from './dataReducer'
import loadingReducer from './loadingReducer';
import deleteAcctReducer from './deleteAcctReducer'

const rootReducer = combineReducers({
    data: DataReducer,
    isLoaded: loadingReducer,
    deleted: deleteAcctReducer
})

export const store = createStore(rootReducer);
  