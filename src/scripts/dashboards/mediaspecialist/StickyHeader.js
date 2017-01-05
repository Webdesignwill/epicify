import React, { Component, PropTypes } from 'react'

export default class StickyHeader extends Component {

  static propTypes = {}

  render () {
    return (
      <div className="sticky-header clearfix">
        <div className="col-sm-12 line-item-row">
          <div className="col-sm-1 line-item">
            <div className="content">
              Progress
            </div>
          </div>
          <div className="col-sm-1 line-item">
            <div className="content">
              Network budget
            </div>
          </div>
          <div className="col-sm-1 line-item">
            <div className="content">
              Pacing to date
            </div>
          </div>
          <div className="col-sm-1 line-item">
            <div className="content">
              Pacing yesterday
            </div>
          </div>
          <div className="col-sm-1 line-item">
            <div className="content">
              Left per day
            </div>
          </div>
          <div className="col-sm-1 line-item">
            <div className="content">
              Actions / Revenue
            </div>
          </div>
          <div className="col-sm-1 line-item">
            <div className="content">
              Network CPA to date
            </div>
          </div>
          <div className="col-sm-1 line-item">
            <div className="content">
              Network CPA yesterday
            </div>
          </div>
          <div className="col-sm-1 line-item">
            <div className="content">
              ROI / ROAS
            </div>
          </div>
          <div className="col-sm-1 line-item">
            <div className="content">
              CPM
            </div>
          </div>
          <div className="col-sm-1 line-item">
            <div className="content">
              CPC
            </div>
          </div>
          <div className="col-sm-1 line-item">
            <div className="content">
              CTR
            </div>
          </div>
        </div>
      </div>
    )
  }
}
