import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import App from './Components/App';
import { Provider } from 'react-redux';
import store from './store';
import { HashRouter } from 'react-router-dom';
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <HashRouter>
        {' '}
        <App />
      </HashRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
