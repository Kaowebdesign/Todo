import React, {Component} from 'react';
import {Button, Icon} from 'semantic-ui-react';
import idGenerator from 'react-id-generator';
import randomColor from 'randomcolor';

import './index.css';


export default class TaskInput extends Component{
	onAddTask(){
		this.TaskText.value.trim()===''?
			alert('Please add some text to input'):
			this.props.addTask(idGenerator('task'),this.TaskText.value,false,randomColor({luminosity: 'light'}));
		this.TaskText.value='';
	}
	render(){
			return(
			<div className="addTask__content" >
				<div className='ui input addTask__input'>
					<input type='text' 
							placeholder='What needs to be done? ' 
							ref={(input) => {this.TaskText=input}} 
							onKeyDown={(e)=>{if(e.keyCode===13) this.onAddTask()}}/>
				</div>
				<Button onClick={this.onAddTask.bind(this)} icon circular >
					<Icon name="add" size="large" />
				</Button>
			</div>
		)
	}
}