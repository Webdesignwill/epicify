import React, { Component, PropTypes } from 'react'
import Details from './itemdata/Details'

export default class LineItemData extends Component {

  static propTypes = {}

  render () {

    console.log(this.props.lineitem)

    let startdate = null,
        enddate = null

    if(this.props.lineitem.config.date_range) {
      startdate = this.props.lineitem.config.date_range.start_date
      enddate = this.props.lineitem.config.date_range.end_date
    }

    return (
      <div className="line-item-data">
        <div className="line-item-data-header clearfix">
          <div className="toolbar">
            <div className="col-sm-8 title">
              <p className="text-size-sm">
                <span className="text-size-sm text-darkgrey">From</span> {startdate} <span className="text-size-sm text-darkgrey">to</span> {enddate}
              </p>
              <p className="text-size-sm">
                <span className="text-size-sm text-darkgrey">Goal</span> ({this.props.lineitem.config.primary_goal.meta.name})
              </p>
            </div>
            <div className="pull-right">
              <i className="fa fa-thumb-tack pull-right" aria-hidden="true"></i>
            </div>
          </div>
        </div>

        <div className="line-item-data-content">
          <Details lineitem={this.props.lineitem} />
        </div>
      </div>
    )
  }
}
