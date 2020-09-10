import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import moment from "moment";
import React, { Component } from 'react';
import { List } from "./List";
import AddIcon from '@material-ui/icons/Add';
import { Fab } from '@material-ui/core';

export default class Vista extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [], description: '', status: '', dueDate: moment(), name: '', email: '', open: false, newitems: [] };
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.hanldeNameResponsibleChange = this.hanldeNameResponsibleChange.bind(this);
        this.hanldeEmailResponsibleChange = this.hanldeEmailResponsibleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.filterList = this.filterList.bind(this);
    }

    render() {

        return (
            <div >
                <List cList={this.state.items} />

                <Fab onClick={this.handleOpen} color="primary" style={{ position: "absolute", right: "0px", bottom: "0", margin: "10px" }}>
                    <AddIcon></AddIcon>
                </Fab>
                {/*<div>
                    <React.Fragment>
                        <input type="text" onChange={this.filterList} />
                        <ul>
                            {this.state.newitems.map((item,i) => {
                                return <li key={i}>{item.description}</li>
                            })}
                        </ul>
                    </React.Fragment>
                        </div>*/}
    
                <Dialog className="App" onClose={this.handleClose} aria-labelledby="simple-dialog-title" open={this.state.open}>
                    <form onSubmit={this.handleSubmit} className="todo-form" style={{ width: "100%" }}>
                        <h3>New Task</h3>
                        <TextField
                            id="text"
                            label="Description"
                            value={this.state.description}
                            onChange={this.handleDescriptionChange}
                            margin="normal" />
                        <br />
                        <TextField
                            id="name"
                            label="Responsible Name"
                            value={this.state.name}
                            onChange={this.hanldeNameResponsibleChange}
                            margin="normal" />

                        <TextField
                            id="email"
                            label="Responsible Email"
                            value={this.state.email}
                            onChange={this.hanldeEmailResponsibleChange}
                            margin="normal" />
                        <br />
                        <TextField
                            id="priority"
                            label="Status"
                            value={this.state.status}
                            onChange={this.handleStatusChange}
                            margin="normal" />
                        <br />
                        <TextField
                            id="due-date"
                            label="Due-Date"
                            type="date"
                            defaultValue={this.state.dueDate.format('YYYY-MM-DD')}
                            onChange={this.handleDateChange}
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }} />
                        <br />
                        <Button variant="contained" color="primary" type="submit">
                            Add Task #{this.state.items.length + 1}
                        </Button>
                    </form>
                </Dialog>
            </div >
        );
    }

    filterList(e) {
        let updateList = <List cList={this.state.items} />;
        updateList = updateList.filter((item,i) => {
            return item.toLowerCase().search(
                e.target.value.toLowerCase()
            ) !== -1;
        });

        this.setState({
            newitems: updateList
        });
    }

    handleOpen() {
        this.setState({ open: true });
    }

    handleClose() {
        this.setState({ open: false });
    }

    handleDescriptionChange(e) {
        this.setState({
            description: e.target.value
        });
    }

    handleStatusChange(e) {
        this.setState({
            status: e.target.value
        });
    }

    handleDateChange(e) {
        this.setState({
            dueDate: moment(e.target.value, 'YYYY-MM-DD')
        });
    }

    hanldeEmailResponsibleChange(e) {
        this.setState({ email: e.target.value });
    }

    hanldeNameResponsibleChange(e) {
        this.setState({ name: e.target.value });
    }

    updateSearch(e) {
        this.setState({ search: e.target.value });
    }

    handleSubmit(e) {

        e.preventDefault();
        console.log(this.state);

        if (!this.state.description.length || !this.state.status.length || !this.state.dueDate)
            return;

        const newItem = {
            description: this.state.description,
            status: this.state.status,
            dueDate: this.state.dueDate,
            responsible: { name: this.state.name, email: this.state.email }

        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            description: '',
            status: '',
            dueDate: moment(),
            name: '',
            email: '',
            open: false
        }));


    }

    componentDidMount() {
        this.setState(prevState => ({
            items: prevState.items.concat(this.props.cList),
        }))
    }
}