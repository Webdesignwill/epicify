
import React from 'react';
import { ReactDOM, render } from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router';

import Application from './containers/Application.js';
import Login from './pages/login.js';
import Index from './pages/index.js';

import "../sass/main.scss";

render((
  <Router>
    <Route path="/" component={ Application }>
      <IndexRoute component={ Index } />
      <Route path="login" component={ Login }></Route>
    </Route>
  </Router>
), document.querySelector('#application-container'));
