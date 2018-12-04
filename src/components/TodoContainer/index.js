import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ListContainer from '../ListContainer';
import './index.css';

import TaskInput from '../TaskInput/';

class TodoContainer extends Component {
	render(){
		return(
			<div className="todoList">
				<div className="todoList__content">
					<TaskInput addTask={this.props.addTask}/>
					<ListContainer listData={this.props} />		
				</div>
			</div>
		);
	}
}

export default TodoContainer;