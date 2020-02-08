import '@babel/polyfill';
import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
