import React, { Component, PropTypes } from 'react'
import Currency from '../../../components/Currency'

export default class NetworkBudget extends Component {

  static propTypes = {}

  render () {
    return (
      <div className="line-item">
        <Currency amount={this.props.lineitem.config.budget.network} />
      </div>
    )
  }
}
