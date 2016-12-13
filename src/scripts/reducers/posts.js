
const defaultState = {
  "data": [],
  "fetching": false,
  "fetched": false,
  "error": null
}

const posts = function (state = defaultState, action) {

  switch (action.type) {
    case "FETCH_POSTS_PENDING" :
      return {
        ...state,
        "fetching" : true
      }

    case "FETCH_POSTS_REJECTED" :
      return {
        ...state,
        "fetching" : false,
        "error" : action.payload
      }

    case "FETCH_POSTS_FULFILLED" :
      return {
        ...state,
        "fetching" : false,
        "fetched" : true,
        "data" : action.payload.data
      }

    default: return state;
  }
}

export default posts
