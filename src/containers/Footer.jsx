import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'; 

import StatusBar from '../components/StatusBar/idnex';
import {showTask} from '../actions/showTask';

function mapDispatchToProps(dispatch){
    return{
        setShowTask:bindActionCreators(showTask, dispatch)
    }
}

export default connect(null,mapDispatchToProps)(StatusBar);