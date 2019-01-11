import {combineReducers} from 'redux';
import todoReducer from './todoReducer';
import userReducer from './userReducer';
import statusReducer from './statusReducer';

const rootReducer= combineReducers({
	userReducer,
	todoReducer,
	statusReducer
});

export default rootReducer;