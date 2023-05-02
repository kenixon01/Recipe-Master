import { createStore, combineReducers } from 'redux';
import DataReducer from './reducers/dataReducer'
import loadingReducer from './reducers/loadingReducer';
import deleteAcctReducer from './reducers/deleteAcctReducer'
import recentSearchesReducer from './reducers/recentSearchesReducer';
import userReducer from './reducers/userReducer';
import verificationCode from './reducers/verificationCode';
import emailReducer from './reducers/emailReducer'
import queryReducer from './reducers/queryReducer';
import nameReducer from './reducers/nameReducer';

const rootReducer = combineReducers({
    data: DataReducer,
    isLoaded: loadingReducer,
    deleted: deleteAcctReducer,
    searches: recentSearchesReducer,
    user: userReducer,
    verificationCode: verificationCode,
    email: emailReducer,
    query: queryReducer,
    name: nameReducer
})

export const store = createStore(rootReducer);
  