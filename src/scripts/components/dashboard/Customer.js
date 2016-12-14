import React, { Component, PropTypes } from 'react'

export default class Customer extends Component {

  static propTypes = {}

  render () {
    return (
      <div>{this.props.params.id}</div>
    )
  }
}
