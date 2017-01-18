import React, { Component, PropTypes } from 'react'
import numeral from 'numeral'

export default class Cpm extends Component {

  static propTypes = {}

  render () {

    const actual = numeral(this.props.lineitem.data.to_date.cpm.actual).format('0,0')
    const target = numeral(this.props.lineitem.data.to_date.cpm.target).format('0,0')

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
