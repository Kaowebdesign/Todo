import React, {Component} from 'react';
import { Button } from 'semantic-ui-react'

export default class StatusBar extends Component{
    render(){
        return(
            <Button.Group floated='center'>
                <Button >Show All</Button>
                <Button color='green'>Active</Button>
                <Button color='red'>Completed</Button>
            </Button.Group>
        )
    }
}
