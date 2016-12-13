
const defaultState = {
  "body": null,
  "id": null,
  "title": null,
  "userId": null,
  "updating": false,
  "updated": false
}

const post = function (state = defaultState, action) {

  switch (action.type) {
    case "FETCH_POST_PENDING" :
      return {
        ...state,
        "updating" : true
      }

    case "FETCH_POST_REJECTED" :
      return {
        ...state,
        "updating" : false,
        "error" : action.payload
      }

    case "FETCH_POST_FULFILLED" :
      return {
        ...state,
        ...action.payload.data,
        "updating" : false,
        "updated" : true
      }

    default: return state;
  }
}

export default post
