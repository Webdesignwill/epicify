
const defaultState = {
  "updating": false,
  "updated": false
}

const dashboard = function (state = defaultState, action) {
  switch (action.type) {
    case "FETCH_DATA_PENDING" :
      return {
        ...state,
        "updating" : true
      }

    case "FETCH_DATA_REJECTED" :
      return {
        ...state,
        "updating" : false,
        "error" : action.payload
      }

    case "FETCH_DATA_FULFILLED" :
      return {
        ...state,
        ...action.payload.data.data,
        "updating" : false,
        "updated" : true
      }

    default: return state;
  }
}

export default dashboard
