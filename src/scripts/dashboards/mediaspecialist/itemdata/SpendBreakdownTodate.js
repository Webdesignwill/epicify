import React, { Component, PropTypes } from 'react'
import Currency from '../../../components/Currency'

export default class SpendBreakdownTodate extends Component {

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
          Spend breakdown <em>(to date)</em> <i className="fa fa-expand pull-right" aria-hidden="true"></i><i className="fa fa-times pull-right" aria-hidden="true"></i>
        </div>
        <div className="data-row-content">
          <div className="inner">
            <p>Network spend <span className="pull-right"><Currency amount={this.props.lineitem.data.to_date.spend.network.actual} /></span></p>
            <p>Media channel fee <span className="pull-right"><Currency amount={this.props.lineitem.data.to_date.spend.media_channel_fee.actual} /></span></p>
            <p>Ad server fee <span className="pull-right"><Currency amount={this.props.lineitem.data.to_date.spend.ad_server_fee.actual} /></span></p>
            <hr />
            <p>Actual spend including fees <span className="pull-right"><Currency amount={this.props.lineitem.data.to_date.spend.total.actual} /></span></p>
          </div>
        </div>
      </div>
    )
  }
}
