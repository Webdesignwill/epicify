
import axios from 'axios'

export function fetchData () {
  return function (dispatch) {
    dispatch({
      type: "FETCH_DATA",
      payload: axios.get('http://localhost:8080/data.json')
    })
  }
}
