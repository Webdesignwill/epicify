
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from './../actions/posts'

import PostItem from '../components/PostItem'

@connect((store) => {
  return {
    "posts" : store.posts.data
  }
})

export default class Index extends Component {

  static propTypes = {}

  componentDidMount() {
    this.props.dispatch(fetchPosts())
  }

  render () {
    return (
      <div className="col-sm-6 col-sm-offset-3">{this.props.posts.map(post =>
        <PostItem key={post.id} body={post.body} id={post.id} title={post.title} userid={post.userId} />
      )}
      </div>
    )
  }
}
