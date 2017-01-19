import React, { Component, PropTypes } from 'react'

export default class Details extends Component {

  static propTypes = {}

  constructor (props) {
    super(props)
    this.toggle = this.toggle.bind(this)
  }

  toggle (event) {
    this.refs.toggle.classList.toggle('expanded')
  }

  render () {

    return (
      <div className="line-item-data-row" ref="toggle">
        <div className="data-row-header" onClick={(event) => this.toggle(event)}>
          Details <i className="fa fa-expand pull-right" aria-hidden="true"></i><i className="fa fa-times pull-right" aria-hidden="true"></i>
        </div>
        <div className="data-row-content">
          <div className="inner">
            <p>Start date <span className="pull-right">2017-01-01</span></p>
            <p>End date <span className="pull-right">2018-01-01</span></p>
            <p>Spend Imported from Network <span className="pull-right">Yes</span></p>
            <p>Has Media Channel Fee <span className="pull-right">No</span></p>
            <p>Is Split Line Item <span className="pull-right">No</span></p>
            <p>Has Manual Override <span className="pull-right">No</span></p>
            <p>Exchange Rate Applied <span className="pull-right">No</span></p>
          </div>
        </div>
      </div>
    )
  }
}
