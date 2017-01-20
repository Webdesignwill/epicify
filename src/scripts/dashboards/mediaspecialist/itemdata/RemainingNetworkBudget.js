import React, { Component, PropTypes } from 'react'
import Currency from '../../../components/Currency'

export default class RemainingNetworkBudget extends Component {

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
          Remaining network budget <i className="fa fa-expand pull-right" aria-hidden="true"></i><i className="fa fa-times pull-right" aria-hidden="true"></i>
        </div>
        <div className="data-row-content">
          <div className="inner">
            <p>Total <span className="pull-right"><Currency amount={this.props.lineitem.data.to_date.budget.remaining.network.total} /></span></p>
            <p>Per day <span className="pull-right"><Currency amount={this.props.lineitem.data.to_date.budget.remaining.network.per_day} /></span></p>
          </div>
        </div>
      </div>
    )
  }
}
