
import { createStore, applyMiddleware } from 'redux'

import logger from 'redux-logger'
import thunk from 'redux-thunk'
import axios from 'axios'
import promise from 'redux-promise-middleware'
import reducers from './reducers/'

const middleware = applyMiddleware(promise(), thunk, logger())
const store = createStore(reducers, middleware)

export default store
