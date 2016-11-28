
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from './../actions/posts'

import Post from '../components/Post'

@connect((store) => {
  return {
    "posts" : store.posts.data
  }
})

export default class Index extends Component {

  componentDidMount() {
    this.props.dispatch(fetchPosts())
  }

  render () {
    return (
      <div>{this.props.posts.map(post =>
        <Post key={post.id} body={post.body} id={post.id} title={post.title} userid={post.userId} />
      )}</div>
    )
  }
}
