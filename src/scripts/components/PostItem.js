
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class PostItem extends Component {

  static propTypes = {
    "title": PropTypes.string,
    "id": PropTypes.number
  }

  render () {
    return (
      <div className="list-group-item">
        <Link to={`/post/${this.props.id}`}>{this.props.title}</Link>
      </div>
    )
  }
}
