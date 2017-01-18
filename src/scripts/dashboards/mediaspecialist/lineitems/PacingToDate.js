import React, { Component, PropTypes } from 'react'
import Percentage from '../../../components/Percentage'

export default class PacingToDate extends Component {

  static propTypes = {}

  render () {
    return (
      <div className="line-item">
        <Percentage status={this.props.lineitem.data.to_date.pacing.status} percentage={this.props.lineitem.data.to_date.pacing.actual} />
      </div>
    )
  }
}
