import React, { Component, PropTypes } from 'react'
import moment from 'moment'

export default class Progress extends Component {

  static propTypes = {}

  render () {

    const daysRemaining = this.props.daterange.days_remaining
    const dayString = (daysRemaining === 1) && ' day' || ' days'

    return (
      <div className="content">
        <div>{daysRemaining}</div>
        <div className="text-size-sm">{dayString} left</div>
      </div>
    )
  }
}
