import { createStore, combineReducers } from 'redux';
import deleteAcctReducer from './reducers/deleteAcctReducer'
import recentSearchesReducer from './reducers/recentSearchesReducer';
import verificationCode from './reducers/verificationCode';
import queryReducer from './reducers/queryReducer';
import emailReducer from './reducers/emailReducer'

const rootReducer = combineReducers({
    query: queryReducer,
    deleted: deleteAcctReducer,
    searches: recentSearchesReducer,
    email: emailReducer,
    verificationCode: verificationCode
})

export const store = createStore(rootReducer);
  