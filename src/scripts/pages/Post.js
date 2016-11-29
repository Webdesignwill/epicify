
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchPost } from './../actions/posts'

@connect((store) => {
  return {
    "body": store.post.body,
    "id": store.post.id,
    "title": store.post.title,
    "userId": store.post.userId
  }
})

export default class Post extends Component {

  static propTypes = {}

  componentDidMount() {
    this.props.dispatch(fetchPost(this.props.params.id))
  }

  render () {
    return (
      <div>
        <h1>{ this.props.title }</h1>
        <cite>Published by user { this.props.userId }</cite>
        <p>{ this.props.body }</p>
      </div>
    )
  }
}
