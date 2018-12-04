import React, {Component} from 'react';
import {Button, Icon} from 'semantic-ui-react';
import idGenerator from 'react-id-generator';
import './index.css';

export default class TaskInput extends Component{
	onAddTask(){
		this.props.addTask(idGenerator('task'),this.TaskText.value,true);
		this.TaskText.value='';
	}
	render(){
			return(
			<div className="addTask__content" >
				<div className='ui input addTask__input'>
					<input type='text' placeholder='Add ' ref={(input) => {this.TaskText=input}}/>
				</div>
				<Button onClick={this.onAddTask.bind(this)} icon circular >
					<Icon name="add" size="large" />
				</Button>
			</div>
		)
	}
}