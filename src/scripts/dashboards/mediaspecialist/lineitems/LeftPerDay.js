import React, { Component, PropTypes } from 'react'
import Currency from '../../../components/Currency'

export default class LeftPerDay extends Component {

  static propTypes = {}

  render () {
    return (
      <div className="line-item">
        <Currency amount={this.props.lineitem.data.to_date.budget.remaining.network.per_day} showcents="true" />
      </div>
    )
  }
}
