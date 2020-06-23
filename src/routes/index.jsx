import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../views/layout';
import Home from '../views/home';

export default () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Layout>
  );
};
