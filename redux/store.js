import { createStore, combineReducers } from 'redux';
import DataReducer from './dataReducer'

const rootReducer = combineReducers({
    data: DataReducer,
})

export const store = createStore(rootReducer);
  