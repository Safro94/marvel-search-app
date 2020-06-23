import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { createBrowserHistory } from 'history';

import App from './components/app';

import './index.css';

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
