import {TOGGLE_TASK} from '../constants';

export let toggleTask =(id) =>{
	return{
		type:TOGGLE_TASK,
		payload:{
			id
		}
	}
}