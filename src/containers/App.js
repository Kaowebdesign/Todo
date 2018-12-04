import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import {bindActionCreators} from 'redux';

import {connect} from 'react-redux';
import TodoList from '../components/List/';
import {addTask} from '../actions/addTask';

class App extends Component {
  render() {
      console.log('App props: ', this.props);
      return (
          <TodoList todo={this.props.todo} addTask={this.props.onAddTask}/>
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
    onAddTask: bindActionCreators(addTask, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
