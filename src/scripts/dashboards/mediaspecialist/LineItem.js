import React, { Component, PropTypes } from 'react'
import Progress from './Progress'
import Currency from './Currency'
import Percentage from './Percentage'
import ActionsRevenue from './ActionsRevenue'
import NetworkCPA from './NetworkCPA'
import Roas from './Roas'
import TargetActual from './TargetActual'

export default class LineItem extends Component {

  static propTypes = {}

  render () {
    return (
      <div className="line-item-row">
        <div className="line-item">
          <div className="content">
            {this.props.lineitem.meta.name}
          </div>
        </div>
        <div className="line-item">
          <Progress daterange={this.props.lineitem.config.date_range} />
        </div>
        <div className="line-item">
          <Currency amount={this.props.lineitem.config.budget.network} />
        </div>
        <div className="line-item">
          <Percentage status={this.props.lineitem.data.to_date.pacing.status} percentage={this.props.lineitem.data.to_date.pacing.actual} />
        </div>
        <div className="line-item">
          <Percentage status={this.props.lineitem.data.yesterday.pacing.status} percentage={this.props.lineitem.data.yesterday.pacing.actual} />
        </div>
        <div className="line-item">
          <Currency amount={this.props.lineitem.data.to_date.budget.remaining.network.per_day} showcents="true" />
        </div>
        <div className="line-item">
          <ActionsRevenue primarygoalid={this.props.lineitem.config.primary_goal.id} goals={this.props.lineitem.data.to_date.goals} />
        </div>
        <div className="line-item">
          <NetworkCPA primarygoalid={this.props.lineitem.config.primary_goal.id} goals={this.props.lineitem.data.to_date.goals} />
        </div>
        <div className="line-item">
          <NetworkCPA primarygoalid={this.props.lineitem.config.primary_goal.id} goals={this.props.lineitem.data.yesterday.goals} />
        </div>
        <div className="line-item">
          <Roas primarygoaltype={this.props.lineitem.config.primary_goal.meta.type} data={this.props.lineitem.data} />
        </div>
        <div className="line-item">
          <TargetActual data={this.props.lineitem.data.to_date.cpm} />
        </div>
        <div className="line-item">
          <TargetActual data={this.props.lineitem.data.to_date.cpc} />
        </div>
        <div className="line-item">
          <TargetActual data={this.props.lineitem.data.to_date.ctr} />
        </div>
      </div>
    )
  }
}
