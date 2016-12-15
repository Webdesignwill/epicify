import React from 'react'

import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'

import Application from './components/Application'
import Posts from './containers/blog/Posts'
import Dashboard from './containers/dashboard/Dashboard'
import Customer from './containers/dashboard/Customer'
import Campaign from './containers/dashboard/Campaign'
import Post from './containers/blog/Post'
import NoMatch from './pages/404'

import store from './store'

const history = syncHistoryWithStore(hashHistory, store)

const Routes =
  <Provider store={ store }>
    <Router history={ history }>
      <Route path="/" component={ Application }>
        <IndexRoute component={ Dashboard } />

        <Route path="/" component={ Dashboard }>
          <Route path="/customer/(:customerid)" component={ Customer }>
            <Route path="/customer/(:customerid)/campaign/:campaignid" component={ Campaign } />
          </Route>
        </Route>

        <Route path="/post/:id" component={ Post }></Route>
        <Route path="*" component={ NoMatch }/>
      </Route>
    </Router>
  </Provider>

export default Routes
