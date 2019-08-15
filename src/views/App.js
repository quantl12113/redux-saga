import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Login from './login';
import Register from './register';

const App = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  )
}

export default App;
