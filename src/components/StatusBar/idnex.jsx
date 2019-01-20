import React, {Component} from 'react';

import { Button } from 'semantic-ui-react'
import {STATUS_TASK} from '../../constants';

const StatusBar = ({setShowTask}) => {
    return(
        <Button.Group>
            <Button onClick={el=>setShowTask(STATUS_TASK.SHOW_ALL)}>Show All</Button>
            <Button color='green' onClick={el=>setShowTask(STATUS_TASK.SHOW_ACTIVE)}>Active</Button>
            <Button color='red' onClick={el=>setShowTask(STATUS_TASK.SHOW_COMPLETE)}>Completed</Button>
        </Button.Group>
    )
}

export default StatusBar;