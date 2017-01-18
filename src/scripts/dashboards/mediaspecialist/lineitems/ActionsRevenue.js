import React, { Component, PropTypes } from 'react'

export default class ActionsRevenue extends Component {

  static propTypes = {}

  render () {

    if(this.props.lineitem.config.primary_goal.id === null) {
      return <div className="line-item text-center pull-left"></div>
    }

    const goal = this.props.lineitem.data.to_date.goals[this.props.lineitem.config.primary_goal.id]
    const actual = Math.round(goal.data && goal.data.actions.actual || null)
    const target = Math.round(goal.data && goal.data.actions.target || null)

    return (
      <div className="line-item">
        <div className="content">
          <div>{actual}</div>
          <div className="text-size-xs lightgrey">({target})</div>
        </div>
      </div>
    )
  }
}
