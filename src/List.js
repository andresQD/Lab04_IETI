import React from 'react';
import Container from '@material-ui/core/Container';
import Card from './Card';

export default class List extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const listTodos = this.props.task;
        const cList = listTodos.map((task,i) =>{
            return(
                <Card key={'task: ' + i } description={task.description} name={task.responsible.name} email={task.responsible.email} status={task.status} dueDate={task.dueDate}></Card>
            )}
        )

        return(
            <Container component="main" maxWidth="sm" fixed= "true">
                <div>
                    <ul> {cList} </ul>
                </div>
            </Container>
        );

    }
}