import React, { Component, PropTypes } from 'react'

export default class ActionsRevenue extends Component {

  static propTypes = {}

  render () {

    if(this.props.primarygoalid === null) {
      return <div className="line-item text-center pull-left"></div>
    }

    const goal = this.props.goals[this.props.primarygoalid]
    const actual = Math.round(goal.data && goal.data.actions.actual || null)
    const target = Math.round(goal.data && goal.data.actions.target || null)

    return (
      <div className="content">
        <div>{actual}</div>
        <div className="text-size-xs lightgrey">({target})</div>
      </div>
    )
  }
}
