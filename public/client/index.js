
import React from 'react';
import { ReactDOM, render } from 'react-dom';
import { Router, Route, Link } from 'react-router';

import Application from './containers/Application.js';
import Login from './pages/login.js';

import "../sass/main.scss";

render((
  <Router>
    <Route path="/" component={ Application }>
      <Route path="login" component={ Login }></Route>
    </Route>
  </Router>
), document.querySelector('#application-container'));
