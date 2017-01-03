import React, { Component, PropTypes } from 'react'

export default class NetworkCPA extends Component {

  static propTypes = {}

  render () {

    if(this.props.primarygoalid === null) {
      return <div className="line-item text-center pull-left"></div>
    }

    const goal = this.props.goals[this.props.primarygoalid]
    const actual = Math.round(goal.data.network_cpa && goal.data.network_cpa.actual || null)

    return (
      <div className="content">
        {actual}
      </div>
    )
  }
}
