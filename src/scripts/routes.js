import React from 'react'

import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'

import Application from './components/Application'
import Posts from './containers/blog/Posts'
import Dashboard from './containers/dashboard/Dashboard'
import Customers from './containers/dashboard/Customers'
import Campaigns from './containers/dashboard/Campaigns'
import Post from './containers/blog/Post'
import NoMatch from './pages/404'

import store from './store'

const Routes =
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ Application }>
        <IndexRoute component={ Dashboard } />

        <Route path="/dashboard" component={ Dashboard }>
          <Route path="/customers/:id" component={ Campaigns }></Route>
        </Route>

        <Route path="/post/:id" component={ Post }></Route>
        <Route path="*" component={ NoMatch }/>
      </Route>
    </Router>
  </Provider>

export default Routes
