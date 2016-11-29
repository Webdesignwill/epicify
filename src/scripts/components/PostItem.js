
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class Posts extends Component {

  static propTypes = {
    "title": PropTypes.string,
    "id": PropTypes.number
  }

  render () {
    return (
      <div>
        <h3><Link to={`/posts/${this.props.id}`}>{this.props.title}</Link></h3>
      </div>
    )
  }
}
