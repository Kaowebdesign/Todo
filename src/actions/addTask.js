import {ADD_TASK} from '../constants';

export let addTask =(id, title, status=true) =>{
	return{
		type:ADD_TASK,
		payload:{
			id,
			title,
			status
		}
	}
}