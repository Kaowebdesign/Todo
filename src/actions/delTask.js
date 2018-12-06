import {DELETE_TASK} from '../constants.js';

export let delTask =(id) =>{
	return{
		type:DELETE_TASK,
		payload:{
			id
		}
	}
}