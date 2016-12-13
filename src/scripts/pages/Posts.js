import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/posts'

import PostItem from '../components/PostItem'

export default class Posts extends Component {

  static propTypes = {}

  componentDidMount() {
    this.props.dispatch(fetchPosts())
  }

  render () {
    return (
      <div className="list-group">{this.props.posts.map(post =>
        <PostItem key={post.id} body={post.body} id={post.id} title={post.title} userid={post.userId} />
      )}
      </div>
    )
  }
}
