import {ADD_TASK} from '../constants';

const initialState=[{
	id:1,
	title:'Выучить React',
	status:true
}];

export default function todoReducer(state=initialState, action)  {
	switch (action.type) {
		case ADD_TASK:
			return [...state, {id:action.payload.id, title:action.payload.title, status:action.payload.status}];
		default:
			return state;
	}
};

