import {STATUS_TASK} from '../constants.js';
import {SHOW_TASK} from '../constants.js';

const initialState={
	status:STATUS_TASK.SHOW_ALL
};

export default function filterReducer(state=STATUS_TASK.SHOW_ALL, action)  {
	switch (action.type) {
		case SHOW_TASK:
			return action.status	
		default:
		  return state
	  }
};

