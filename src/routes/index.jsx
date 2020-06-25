import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../views/home';
import ComicDetail from '../views/comicDetail';

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/comic/:id" component={ComicDetail} />
    </Switch>
  );
};
