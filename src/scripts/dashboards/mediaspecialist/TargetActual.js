import React, { Component, PropTypes } from 'react'
import numeral from 'numeral'

export default class TargetActual extends Component {

  static propTypes = {}

  render () {

    const actual = numeral(this.props.data.actual).format('0,0')
    const target = numeral(this.props.data.target).format('0,0')

    return (
      <div className="content">
        <div>€ {actual}</div>
        <div className="text-size-sm text-muted">( € {target} )</div>
      </div>
    )
  }
}
