import React, { Component, PropTypes } from 'react'
import numeral from 'numeral'

export default class Cpc extends Component {

  static propTypes = {}

  render () {

    const actual = numeral(this.props.lineitem.data.to_date.cpc.actual).format('0,0')
    const target = numeral(this.props.lineitem.data.to_date.cpc.target).format('0,0')

    return (
      <div className="line-item">
        <div className="content">
          <div>€ {actual}</div>
          <div className="text-size-xs lightgrey">(€ {target})</div>
        </div>
      </div>
    )
  }
}
