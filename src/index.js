import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
// import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware, compose } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import allReducers from './reducers';
import History from './history';
import { routerMiddleware } from 'react-router-redux';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

// const middleware = applyMiddleware(
//   routerMiddleware(History),
//   // sagaMiddleware
// );

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = {
  ...createStore(allReducers, composeEnhancers(
    applyMiddleware(sagaMiddleware, routerMiddleware(History)),
  )),
};
sagaMiddleware.run(rootSaga);
console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App history={History} />
  </Provider>,
  document.getElementById('root')
);