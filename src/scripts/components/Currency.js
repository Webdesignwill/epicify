import React, { Component, PropTypes } from 'react'
import numeral from 'numeral';

export default class Currency extends Component {

  static propTypes = {}

  render () {

    const formattedCurrency = () => {
      return numeral(this.props.amount).format(this.props.showcents ? '0,0.00' : '0,0')
    }

    return (
      <span className="content">
        € {formattedCurrency()}
      </span>
    )
  }
}
