
const defaultState = {
  "lineitemid": null
}

const lineitems = function (state = defaultState, action) {
  switch (action.type) {
    case "LINEITEM_SELECTED" :
      return {
        ...state,
        "lineitemid" : action.payload
      }

    default: return state;
  }
}

export default lineitems
