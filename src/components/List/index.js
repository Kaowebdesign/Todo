import React, {Component} from 'react';
import Item from '../Item';
import ReactDOM from 'react-dom';
import {List} from 'semantic-ui-react';
import './index.css';

import TaskInput from '../TaskInput/';

class TodoList extends Component {
	render(){
		return(
			<div className="todoList">
				<div className="todoList__content">
					<TaskInput addTask={this.props.addTask}/>
					<List>		
						{this.props.todo.map( (e, i) =><List.Item>
															<List.Icon name="caret right" /> 
															<List.Content key={i}> 
																{e.title} 
															</List.Content>
														</List.Item> )}
					</List>
				</div>
			</div>
		);
	}
}

export default TodoList;