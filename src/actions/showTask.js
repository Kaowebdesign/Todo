import {SHOW_TASK} from '../constants';

export let showTask =(status) =>({
	type:SHOW_TASK,
	status
})