
import axios from 'axios'

export function fetchUsers () {
  return function (dispatch) {
    dispatch({
      type: "FETCH_USERS",
      payload: axios.get("http://rest.learncode.academy/api/wstern/users")
    })
  }
}
