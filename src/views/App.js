import React from 'react';
import './App.css';
import { Route, Switch, Router } from "react-router-dom";
import Login from './login';
import Register from './register';
import Home from './home'

const App = props => {
  const { history } = props;
  console.log(history)
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  )
}

export default App;
