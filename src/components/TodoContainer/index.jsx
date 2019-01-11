import React, {Component} from 'react';
import ListContainer from '../ListContainer/index.jsx';
import StatusBar from '../StatusBar/idnex';
import './index.css';

import TaskInput from '../TaskInput/';

class TodoContainer extends Component {
	render(){
		return(
			<div className="todoList">
				<div className="todoList__add">
					<TaskInput addTask={this.props.addTask}/>
				</div>
				<div className="todoList__content">
					<div className="todoList__items">		
						<ListContainer listData={this.props} 
										toggleTask={this.props.toggleTask}
										delTask={this.props.delTask} />		
					</div>
				</div>
				<div className="todoList__statusBar"> 
					<StatusBar />
				</div>
			</div>
		);
	}
}

export default TodoContainer;