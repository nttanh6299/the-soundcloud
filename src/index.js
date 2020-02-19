import '@babel/polyfill';
import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { BrowserRouter as Router } from 'react-router-dom';
import DevTools from './components/devtools';

const store = configureStore();

const Main = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
      {/* <DevTools store={store} /> */}
    </React.Fragment>
  );
};

ReactDOM.render(<Main />, document.getElementById('root'));
