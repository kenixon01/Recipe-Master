import { createStore, combineReducers } from 'redux';
import DataReducer from './dataReducer'
import loadingReducer from './loadingReducer';

const rootReducer = combineReducers({
    data: DataReducer,
    isLoaded: loadingReducer
})

export const store = createStore(rootReducer);
  