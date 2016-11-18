
import { combineReducers } from 'redux'

import tweets from './tweets'
import users from './users'

export default combineReducers({
  tweets,
  users
})
