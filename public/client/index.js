
import React from 'react';
import { ReactDOM, render } from 'react-dom';
import { Router, Route, Link } from 'react-router';

import Index from './pages/index.js';
import Application from './containers/Application.js';

import "../sass/main.scss";

render((
  <Router>
    <Route path="/" component={ Application }>
      <Route path="home" component={ Index }></Route>
    </Route>
  </Router>
), document.querySelector('main'));
