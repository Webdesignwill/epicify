
import React, { Component, PropTypes } from 'react'

export default class Posts extends Component {

  static propTypes = {
    "title" : PropTypes.string,
    "body": PropTypes.string
  }

  render () {
    return (
      <div>
        <h3>{ this.props.title }</h3>
        <p>{ this.props.body }</p>
      </div>
    )
  }
}
