import {combineReducers} from 'redux';
import todoReducer from './todoReducer';
import userReducer from './userReducer';

const rootReducer= combineReducers({
	userReducer,
	todoReducer
});

export default rootReducer;