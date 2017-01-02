import React, { Component, PropTypes } from 'react'
import moment from 'moment'

export default class Progress extends Component {

  static propTypes = {}

  render () {

    const startDate = moment(this.props.daterange.start_date)
    const endDate = moment(this.props.daterange.end_date)
    const daysTotal = endDate.diff(startDate, 'days') + 1
    const daysRemaining = this.props.daterange.days_remaining
    const daysPassed = daysTotal - daysRemaining
    const dayString = (daysRemaining === 1) && 'day' || 'days'

    return (
      <div className="line-item pull-left">
        {daysRemaining} {dayString} left
      </div>
    )
  }
}
