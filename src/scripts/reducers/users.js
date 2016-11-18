
const defaultState = {
  "fetching" : false,
  "fetched" : false,
  "data" : [],
  "error" : null
}

const userReducer = function (state = defaultState, action) {

  switch (action.type) {
    case "FETCH_USERS_PENDING" : {
      state = {...state, "fetching" : true}
      break;
    }
    case "FETCH_USERS_REJECTED" : {
      state = {...state, "fetching" : false, "error" : action.payload}
      break;
    }
    case "FETCH_USERS_FULFILLED" : {
      state = {
        ...state,
        "fetching" : false,
        "fetched" : true,
        "data" : action.payload.data
      }
      break;
    }
  }

  return state
}

export default userReducer
