import React, { Component, PropTypes } from 'react'
import numeral from 'numeral'

export default class Roas extends Component {

  static propTypes = {}

  render () {

    if(this.props.lineitem.config.primary_goal.meta.type === null) {
      return <div className="line-item text-center pull-left"></div>
    }

    const actual = numeral(this.props.lineitem.data.to_date[this.props.lineitem.config.primary_goal.meta.type].actual).format('0.00')

    return (
      <div className="line-item">
        <div className="content">
          <div>{actual}</div>
          <div className="text-size-xs lightgrey">({this.props.lineitem.config.primary_goal.meta.type})</div>
        </div>
      </div>
    )
  }
}
