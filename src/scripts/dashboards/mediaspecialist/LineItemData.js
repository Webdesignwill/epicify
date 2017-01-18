import React, { Component, PropTypes } from 'react'

export default class LineItemData extends Component {

  static propTypes = {}

  render () {

    console.log(this.props.lineitem)

    return (
      <div>{this.props.lineitem.meta.name}</div>
    )
  }
}
