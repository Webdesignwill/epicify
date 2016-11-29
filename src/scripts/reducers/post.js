
const defaultState = {
  "body": null,
  "id": null,
  "title": null,
  "userId": null,
  "updating": false,
  "updated": false
}

const postReducer = function (state = defaultState, action) {

  switch (action.type) {
    case "FETCH_POST_PENDING" : {
      state = {
        ...state,
        "updating" : true
      }
      break;
    }
    case "FETCH_POST_REJECTED" : {
      state = {
        ...state,
        "updating" : false,
        "error" : action.payload
      }
      break;
    }
    case "FETCH_POST_FULFILLED" : {
      state = {
        ...state,
        ...action.payload.data,
        "updating" : false,
        "updated" : true
      }
      break;
    }
  }

  return state
}

export default postReducer
