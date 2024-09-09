import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk'
import characterReducer from './reducers';

const rootReducer = combineReducers({
  characters: characterReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
