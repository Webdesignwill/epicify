import React, { Component, PropTypes } from 'react'

export default class Progress extends Component {

  static propTypes = {}

  render () {

    const daysRemaining = this.props.lineitem.config.date_range.days_remaining
    const dayString = (daysRemaining === 1) && ' day' || ' days'

    return (
      <div className="line-item">
        <div className="content">
          <div>{daysRemaining}</div>
          <div className="text-size-xs lightgrey">{dayString} left</div>
        </div>
      </div>
    )
  }
}
