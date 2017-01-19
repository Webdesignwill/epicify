import React, { Component, PropTypes } from 'react'

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
              <h4>{this.props.lineitem.meta.name} <em className="text-size-sm text-darkgrey">({this.props.lineitem.config.primary_goal.meta.name})</em></h4>
              <p className="text-size-sm">
                From <span className="text-darkgrey">{startdate}</span> to <span className="text-darkgrey">{enddate}</span>
              </p>
            </div>
            <div className="pull-right">
              <i className="fa fa-thumb-tack pull-right" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
