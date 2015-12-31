
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Application from './containers/Application.js';
import Login from './pages/login.js';
import Index from './pages/index.js';

const Routes = <Router>
  <Route path="/" component={ Application }>
    <IndexRoute component={ Index } />
    <Route path="login" component={ Login }></Route>
  </Route>
</Router>;

export default Routes;
