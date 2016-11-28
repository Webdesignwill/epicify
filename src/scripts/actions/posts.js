
import axios from 'axios'

export function fetchPosts () {
  return function (dispatch) {
    dispatch({
      type: "FETCH_POSTS",
      payload: axios.get("https://jsonplaceholder.typicode.com/posts")
    })
  }
}
