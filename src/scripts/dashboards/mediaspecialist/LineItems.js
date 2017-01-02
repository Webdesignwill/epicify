import React, { Component, PropTypes } from 'react'
import Progress from './Progress'
import Currency from './Currency'
import Percentage from './Percentage'
import ActionsRevenue from './ActionsRevenue'

export default class LineItems extends Component {

  static propTypes = {}

  render () {

    console.log(this.props.lineitems)

    return (
      <div className="table-body line-items">
        {this.props.lineitems.length ? this.props.lineitems.map(lineitem =>
          <div key={lineitem.id}>
            <div className="clearfix table-row">
              <div className="table-row-header">
                <div className="m__l m__r">
                  {lineitem.meta.name} <span className="pull-right">{lineitem.media_plan.meta.name}</span>
                </div>
              </div>
              <div className="table-row-body clearfix">
                <Progress daterange={lineitem.config.date_range} />
                <Currency amount={lineitem.config.budget.network} />
                <Percentage percentage={lineitem.data.to_date.pacing.actual} />
                <Percentage percentage={lineitem.data.yesterday.pacing.actual} />
                <Currency amount={lineitem.data.to_date.budget.remaining.network.per_day} showcents="true" />
                <ActionsRevenue actions={lineitem.data.to_date.goals[lineitem.config.primary_goal.id].data.actions} />
                <Currency amount={lineitem.data.to_date.goals[lineitem.config.primary_goal.id].data.network_cpa.expected} />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    )
  }
}
