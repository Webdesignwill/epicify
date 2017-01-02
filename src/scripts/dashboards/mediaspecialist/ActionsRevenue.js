import React, { Component, PropTypes } from 'react'

export default class ActionsRevenue extends Component {

  static propTypes = {}

  render () {

    const actual = Math.round(this.props.actions.actual)
    const target = Math.round(this.props.actions.target)

    return (
      <div className="line-item pull-left">{actual} <sup>{target}</sup></div>
    )
  }
}
