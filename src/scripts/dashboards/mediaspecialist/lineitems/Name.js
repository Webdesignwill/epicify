import React, { Component, PropTypes } from 'react'

export default class Name extends Component {

  static propTypes = {}

  render () {
    return (
      <div className="line-item">
        <div className="content">
          {this.props.lineitem.meta.name}
        </div>
      </div>
    )
  }
}
