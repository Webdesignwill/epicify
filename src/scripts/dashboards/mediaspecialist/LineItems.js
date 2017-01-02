import React, { Component, PropTypes } from 'react'
import Progress from './Progress'

export default class LineItems extends Component {

  static propTypes = {}

  render () {
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
              </div>
            </div>
          </div>
        ) : null}
      </div>
    )
  }
}
