import { createStore, combineReducers } from 'redux';
import DataReducer from './reducers/dataReducer'
import loadingReducer from './reducers/loadingReducer';
import deleteAcctReducer from './reducers/deleteAcctReducer'
import recentSearchesReducer from './reducers/recentSearchesReducer';

const rootReducer = combineReducers({
    data: DataReducer,
    isLoaded: loadingReducer,
    deleted: deleteAcctReducer,
    searches: recentSearchesReducer
})

export const store = createStore(rootReducer);
  