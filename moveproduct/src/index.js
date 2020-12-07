import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootreducer from './reducers/moveDataReducers';
import reportWebVitals from './reportWebVitals';



import "bootstrap/dist/css/bootstrap.css";
import "./asset/main.css";

// qua trinh thuc hien redux store action -> reducer -> store -> view 
const store = createStore(rootreducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
