import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { ApplicationProvider } from './hooks/application';
import { FavouritesProvider } from './hooks/favourites';

import App from './components/app';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <FavouritesProvider>
      <ApplicationProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ApplicationProvider>
    </FavouritesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
