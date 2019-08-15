import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import allReducers from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(allReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);