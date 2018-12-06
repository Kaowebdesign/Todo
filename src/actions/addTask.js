import {ADD_TASK} from '../constants';

export let addTask =(id, title, status) =>{
	return{
		type:ADD_TASK,
		payload:{
			id,
			title,
			status
		}
	}
}