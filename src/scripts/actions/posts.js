
import axios from 'axios'

export function fetchPosts () {
  return function (dispatch) {
    dispatch({
      type: "FETCH_POSTS",
      payload: axios.get("https://jsonplaceholder.typicode.com/posts")
    })
  }
}

export function fetchPost (id) {
  return function (dispatch) {
    dispatch({
      type: "FETCH_POST",
      payload: axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    })
  }
}
