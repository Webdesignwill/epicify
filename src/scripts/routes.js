import React from 'react'

import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'

import Application from './components/Application'
import Mediaspecialist from './containers/dashboards/mediaspecialist/Dashboard'
import Campaign from './containers/dashboards/mediaspecialist/Campaign'
import NoMatch from './pages/404'

import store from './store'

const history = syncHistoryWithStore(browserHistory, store)

const Routes =
  <Provider store={ store }>
    <Router history={ history }>
      <Route path="/" component={ Application }>
        <IndexRoute component={ Mediaspecialist } />

        <Route component={ Mediaspecialist }>
          <Route path="customer/(:customerid)" component={ Campaign } ></Route>
        </Route>

        <Route path="*" component={ NoMatch }/>
      </Route>
    </Router>
  </Provider>

export default Routes
