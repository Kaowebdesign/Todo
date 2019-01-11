import {ACTIVE_TASK} from '../constants';

const initialState=[{
	id:1,
	title:'Выучить React',
	status:false
}];

export default function statusReducer(state=initialState, action)  {
    switch (action.type) {
		case ACTIVE_TASK:
			return state=state.filter(todo => todo.id!==action.payload.id)
		default:
			return state;
	}
};
