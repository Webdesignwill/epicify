import React, { Component, PropTypes } from 'react'

export default class NetworkCpaYesterday extends Component {

  static propTypes = {}

  render () {

    if(this.props.lineitem.config.primary_goal.id === null) {
      return <div className="line-item text-center pull-left"></div>
    }

    const goal = this.props.lineitem.data.yesterday.goals[this.props.lineitem.config.primary_goal.id]
    const actual = Math.round(goal.data.network_cpa && goal.data.network_cpa.actual || null)

    return (
      <div className="line-item">
        <div className="content">
          {actual}
        </div>
      </div>
    )
  }
}
