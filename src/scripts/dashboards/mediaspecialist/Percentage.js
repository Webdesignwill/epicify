import React, { Component, PropTypes } from 'react'
import numeral from 'numeral';

export default class Pacing extends Component {

  static propTypes = {}

  render () {

    const formattedPercentage = () => {
      return numeral(0.01 * this.props.percentage).format('0%');
    }

    return (
      <div className="line-item pull-left">{formattedPercentage()}</div>
    )
  }
}
