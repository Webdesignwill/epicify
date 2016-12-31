
import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux'

import { routerReducer } from 'react-router-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import axios from 'axios'
import promise from 'redux-promise-middleware'
import * as reducers from './reducers'

const middleware = applyMiddleware(promise(), thunk)

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
});

const store = createStore(reducer, middleware)

export default store
