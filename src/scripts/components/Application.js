
import React, { Component, PropTypes } from 'react'

export default class Application extends Component {
  render () {
    return (
      <div>{this.props.children}</div>
    )
  }
}
