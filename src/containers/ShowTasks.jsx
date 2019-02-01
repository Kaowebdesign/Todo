import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'; 
import randomColor from 'randomcolor';

import ListContainer from '../components/ListContainer/index';
import {STATUS_TASK} from '../constants';

import {toggleTask} from '../actions/toggleTask';
import {delTask} from '../actions/delTask';

const showTodo = (todo, status) => {
    switch (status) {
      case STATUS_TASK.SHOW_ALL:
        return todo
      case STATUS_TASK.SHOW_COMPLETE:
        return todo.filter(t => t.complete)
      case STATUS_TASK.SHOW_ACTIVE:
        return todo.filter(t => !t.complete)
      default:
        throw new Error('Unknown filter: ' + status)
    }
  }
  var date= new Date('2019-1-20');
  //console.log('***TEST***','==> ', date.getFullYear(),date.getMonth(), date.getDay());
  console.log('***TEST***','==> ', randomColor());

function mapStateToProps(state){
    return {
        todo: showTodo(state.todoReducer, state.filterReducer)
    }
  }
  
  function mapDispatchToProps(dispatch){
    return{
        onToggleTask: bindActionCreators(toggleTask, dispatch),
        onDelTask: bindActionCreators(delTask, dispatch)
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)