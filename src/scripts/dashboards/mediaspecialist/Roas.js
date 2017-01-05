import React, { Component, PropTypes } from 'react'
import numeral from 'numeral'

export default class Roas extends Component {

  static propTypes = {}

  render () {

    if(this.props.primarygoaltype === null) {
      return <div className="line-item text-center pull-left"></div>
    }

    const actual = numeral(this.props.data.to_date[this.props.primarygoaltype].actual).format('0.00')

    return (
      <div className="content">
        <div>{actual}</div>
        <div className="text-size-sm">( {this.props.primarygoaltype} )</div>
      </div>
    )
  }
}
