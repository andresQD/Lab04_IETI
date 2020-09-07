import React, { Component } from 'react';

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from "./Login"
import Vista from "./Vista"
export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const LoginView = () => (
      <Login />
    );
    const TodoView = () => (
      <Vista />
    )

    return (

      <Router>
        <div className="App">

          <div>
            
            <Switch>
              <Route exact path="/" component={LoginView} />
              <Route path="/tasks" component={TodoView} />
            </Switch>
          </div>

        </div>
      </Router>
    );
  }

}
