
import React from 'react'

import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'

import Index from './pages/Index.js'
import Application from './Application.js'
import NoMatch from './pages/404.js'

import store from './store'

const Routes =
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ Application }>
        <IndexRoute component={ Index } />
        <Route path="*" component={ NoMatch }/>
      </Route>
    </Router>
  </Provider>

export default Routes
