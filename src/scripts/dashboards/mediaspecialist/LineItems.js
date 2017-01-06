import React, { Component, PropTypes } from 'react'
import Progress from './Progress'
import Currency from './Currency'
import Percentage from './Percentage'
import ActionsRevenue from './ActionsRevenue'
import NetworkCPA from './NetworkCPA'
import Roas from './Roas'
import TargetActual from './TargetActual'

export default class LineItems extends Component {

  static propTypes = {}

  render () {
    return (
      <div className="line-items clearfix">
        {this.props.lineitems.length ? this.props.lineitems.map((lineitem, index) =>
          <div className="line-items-wrapper" key={lineitem.id}>
            <div className="col-sm-12 line-item-header">
              {lineitem.meta.name}
            </div>
            {index === 0 ? <div className="col-sm-12 line-item-row line-item-row-totals">
              <div className="col-sm-1 line-item"></div>
              <div className="col-sm-1 line-item">
                <div className="content">
                  100%
                </div>
              </div>
              <div className="col-sm-1 line-item">
                <div className="content">
                  100%
                </div>
              </div>
              <div className="col-sm-1 line-item">
                <div className="content">
                  100%
                </div>
              </div>
              <div className="col-sm-1 line-item"></div>
              <div className="col-sm-1 line-item"></div>
              <div className="col-sm-1 line-item"></div>
              <div className="col-sm-1 line-item"></div>
              <div className="col-sm-1 line-item"></div>
              <div className="col-sm-1 line-item">
                <div className="content">
                  <div>€ 154 <span className="lightgrey">(€ 80)</span></div>
                </div>
              </div>
              <div className="col-sm-1 line-item">
                <div className="content">
                  <div>€ 154 <span className="lightgrey">(€ 80)</span></div>
                </div>
              </div>
              <div className="col-sm-1 line-item">
                <div className="content">
                  <div>€ 154 <span className="lightgrey">(€ 80)</span></div>
                </div>
              </div>
            </div> : null}
            <div className="col-sm-12 line-item-row">
              <div className="col-sm-1 line-item">
                <Progress daterange={lineitem.config.date_range} />
              </div>
              <div className="col-sm-1 line-item">
                <Currency amount={lineitem.config.budget.network} />
              </div>
              <div className="col-sm-1 line-item">
                <Percentage status={lineitem.data.to_date.pacing.status} percentage={lineitem.data.to_date.pacing.actual} />
              </div>
              <div className="col-sm-1 line-item">
                <Percentage status={lineitem.data.yesterday.pacing.status} percentage={lineitem.data.yesterday.pacing.actual} />
              </div>
              <div className="col-sm-1 line-item">
                <Currency amount={lineitem.data.to_date.budget.remaining.network.per_day} showcents="true" />
              </div>
              <div className="col-sm-1 line-item">
                <ActionsRevenue primarygoalid={lineitem.config.primary_goal.id} goals={lineitem.data.to_date.goals} />
              </div>
              <div className="col-sm-1 line-item">
                <NetworkCPA primarygoalid={lineitem.config.primary_goal.id} goals={lineitem.data.to_date.goals} />
              </div>
              <div className="col-sm-1 line-item">
                <NetworkCPA primarygoalid={lineitem.config.primary_goal.id} goals={lineitem.data.yesterday.goals} />
              </div>
              <div className="col-sm-1 line-item">
                <Roas primarygoaltype={lineitem.config.primary_goal.meta.type} data={lineitem.data} />
              </div>
              <div className="col-sm-1 line-item">
                <TargetActual data={lineitem.data.to_date.cpm} />
              </div>
              <div className="col-sm-1 line-item">
                <TargetActual data={lineitem.data.to_date.cpc} />
              </div>
              <div className="col-sm-1 line-item">
                <TargetActual data={lineitem.data.to_date.ctr} />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    )
  }
}
