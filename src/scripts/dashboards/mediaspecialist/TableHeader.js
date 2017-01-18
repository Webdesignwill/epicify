import React, { Component, PropTypes } from 'react'

export default class LineItems extends Component {

  static propTypes = {}

  render () {
    return (
      <div className="line-items-header clearfix">
        <div className="line-item">
          Name
        </div>
        <div className="line-item">
          Progress
        </div>
        <div className="line-item">
          Network Budget
        </div>
        <div className="line-item">
          Pacing <br /><em>(to date)</em>
        </div>
        <div className="line-item">
          Pacing <em>(yesterday)</em>
        </div>
        <div className="line-item">
          Left<br /><em>(per day)</em>
        </div>
        <div className="line-item">
          Actions<br />Revenue
        </div>
        <div className="line-item">
          Net CPA <br /><em>(to date)</em>
        </div>
        <div className="line-item">
          Net CPA <br /><em>(yesterday)</em>
        </div>
        <div className="line-item">
          ROI<rb />ROAS
        </div>
        <div className="line-item">
          CPM
        </div>
        <div className="line-item">
          CPC
        </div>
        <div className="line-item">
          CTR
        </div>
      </div>
    )
  }
}
