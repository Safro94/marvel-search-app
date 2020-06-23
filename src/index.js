import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { ApplicationProvider } from './hooks/application';

import { createBrowserHistory } from 'history';

import App from './components/app';

import './index.css';

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <ApplicationProvider>
      <BrowserRouter history={history}>
        <App />
      </BrowserRouter>
    </ApplicationProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
