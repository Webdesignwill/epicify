import React, { Component, PropTypes } from 'react'
import Currency from '../../../components/Currency'

export default class Budget extends Component {

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
          Budget <i className="fa fa-expand pull-right" aria-hidden="true"></i><i className="fa fa-times pull-right" aria-hidden="true"></i>
        </div>
        <div className="data-row-content">
          <div className="inner">
            <p>Network Budget <span className="pull-right"><Currency amount={this.props.lineitem.config.budget.network} /></span></p>
            <p>Expected media channel fee <span className="pull-right"><Currency amount={this.props.lineitem.config.budget.media_channel_fee} /></span></p>
            <p>Expected ad server fee <span className="pull-right"><Currency amount={this.props.lineitem.config.budget.ad_server_fee} /></span></p>
            <hr />
            <p>Budget including fee's <span className="pull-right"><Currency amount={this.props.lineitem.config.budget.total} /></span></p>
          </div>
        </div>
      </div>
    )
  }
}
