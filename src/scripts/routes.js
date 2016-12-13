
import React from 'react'

import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'

import Application from './components/Application'
import Posts from './containers/blog/Posts'
import Post from './containers/blog/Post'
import NoMatch from './pages/404'

import store from './store'

const Routes =
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ Application }>
        <IndexRoute component={ Posts } />

        <Route path="/post/:id" component={ Post }></Route>

        {/* <Route path="/mediaspecialist" component={ MediaSpecialist }></Route> */}

        <Route path="*" component={ NoMatch }/>
      </Route>
    </Router>
  </Provider>

export default Routes
