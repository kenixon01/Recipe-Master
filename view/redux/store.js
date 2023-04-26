import { createStore, combineReducers } from 'redux';
import deleteAcctReducer from './reducers/deleteAcctReducer'
import recentSearchesReducer from './reducers/recentSearchesReducer';
import userReducer from './reducers/userReducer';
import verificationCode from './reducers/verificationCode';
import queryReducer from './reducers/queryReducer';

const rootReducer = combineReducers({
    query: queryReducer,
    deleted: deleteAcctReducer,
    searches: recentSearchesReducer,
    user: userReducer,
    verificationCode: verificationCode
})

export const store = createStore(rootReducer);
  