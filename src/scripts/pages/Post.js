
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchPost } from './../actions/posts'

export default class Post extends Component {

  static propTypes = {}

  componentWillMount() {
    this.props.dispatch(fetchPost(this.props.params.id))
  }

  componentWillUnmount () {
    alert('remember me')
  }

  render () {
    return (
      <div>
        <div className="list-group col-sm-2">
          <a href="/" className="list-group-item text-danger">
            Edit post
            <i className="fa fa-pencil" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-sm-10">
          <h1>{ this.props.title }</h1>
          <cite>Published by user { this.props.userId }</cite>
          <p>{ this.props.body }</p>
        </div>
      </div>
    )
  }
}
