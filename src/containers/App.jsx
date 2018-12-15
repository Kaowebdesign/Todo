import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import {bindActionCreators} from 'redux';

import {connect} from 'react-redux';
import TodoContainer from '../components/TodoContainer/index.jsx';
import {addTask} from '../actions/addTask';
import {toggleTask} from '../actions/toggleTask';
import {delTask} from '../actions/delTask.js';

class App extends Component {
  render() {
      console.log('App props: ', this.props);
      return (
          <TodoContainer todo={this.props.todo} 
                          addTask={this.props.onAddTask}
                          toggleTask={this.props.onToggleTask}
                          delTask={this.props.onDelTask} />
        )
  }
}

function mapStateToProps(state){
  return {
    todo:state.todoReducer
  }
}

function mapDispatchToProps(dispatch){
  return{
    onAddTask: bindActionCreators(addTask, dispatch),
    onToggleTask: bindActionCreators(toggleTask, dispatch),
    onDelTask: bindActionCreators(delTask, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
