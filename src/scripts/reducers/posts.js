
const defaultState = {
  "data": [],
  "fetching": false,
  "fetched": false,
  "error": null
}

const postsReducer = function (state = defaultState, action) {

  switch (action.type) {
    case "FETCH_POSTS_PENDING" : {
      state = {
        ...state,
        "fetching" : true
      }
      break;
    }
    case "FETCH_POSTS_REJECTED" : {
      state = {
        ...state,
        "fetching" : false,
        "error" : action.payload
      }
      break;
    }
    case "FETCH_POSTS_FULFILLED" : {
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

export default postsReducer
