import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';                   
//The <Provider> component makes the Redux store available to any nested components that need to access the Redux store.

import 'antd/dist/antd.css'
import store from './app/store';

ReactDOM.render(
    <Router>
        <Provider store={store}>
        <App /> 
        </Provider>
    </Router>, 
    document.getElementById('root')
  );