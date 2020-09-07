import React from 'react';
import { task } from './Task';
import ResponsiveDrawer from './ResponsiveDrawer';
import List from './List';

export default class Vista extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="Vista">
                <ResponsiveDrawer />
                <List task = {task}> </List>
            </div>
        )
    }
}