import React, { Component, PropTypes } from 'react'

export default class LineItems extends Component {

  static propTypes = {}

  render () {
    return (
      <div className="line-items-header clearfix">
        <div className="col-sm-1 line-item">
          Progress
        </div>
        <div className="col-sm-1 line-item">
          Network Budget
        </div>
        <div className="col-sm-1 line-item">
          Pacing <br /><em>(to date)</em>
        </div>
        <div className="col-sm-1 line-item">
          Pacing <em>(yesterday)</em>
        </div>
        <div className="col-sm-1 line-item">
          Left<br /><em>(per day)</em>
        </div>
        <div className="col-sm-1 line-item">
          Actions<br />Revenue
        </div>
        <div className="col-sm-1 line-item">
          Net CPA <br /><em>(to date)</em>
        </div>
        <div className="col-sm-1 line-item">
          Net CPA <br /><em>(yesterday)</em>
        </div>
        <div className="col-sm-1 line-item">
          ROI<rb />ROAS
        </div>
        <div className="col-sm-1 line-item">
          CPM
        </div>
        <div className="col-sm-1 line-item">
          CPC
        </div>
        <div className="col-sm-1 line-item">
          CTR
        </div>
      </div>
    )
  }
}
