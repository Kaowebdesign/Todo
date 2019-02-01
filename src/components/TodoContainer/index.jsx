import React, {Component} from 'react';
import ShowTasks from '../../containers/ShowTasks';
import Footer from '../../containers/Footer';
import './index.css';

import TaskInput from '../TaskInput/';

class TodoContainer extends Component {
	render(){
		console.log('TodoContainer-> props -> ',this.props);
		return(
			<div className="todoList">
				<div className="todoList__add">
					<TaskInput addTask={this.props.addTask}/>
				</div>	
				<ShowTasks />		
				<div className="todoList__statusBar"> 
					<Footer />
				</div>
			</div>
		);
	}
}

export default TodoContainer;