import { createStore, combineReducers } from 'redux';
import DataReducer from './reducers/dataReducer'
import loadingReducer from './reducers/loadingReducer';
import deleteAcctReducer from './reducers/deleteAcctReducer'
import recentSearchesReducer from './reducers/recentSearchesReducer';
import userReducer from './reducers/userReducer';
import verificationCode from './reducers/verificationCode';
import listReducer from './reducers/listReducer';
import emailReducer from './reducers/emailReducer';


const rootReducer = combineReducers({
    data: DataReducer,
    isLoaded: loadingReducer,
    deleted: deleteAcctReducer,
    searches: recentSearchesReducer,
    user: userReducer,
    verificationCode: verificationCode,
    email: emailReducer,
    list: listReducer,
  
})

export const store = createStore(rootReducer);
  