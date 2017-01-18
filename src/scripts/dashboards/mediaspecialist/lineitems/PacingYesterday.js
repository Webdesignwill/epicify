import React, { Component, PropTypes } from 'react'
import Percentage from '../../../components/Percentage'

export default class PacingYesterday extends Component {

  static propTypes = {}

  render () {
    return (
      <div className="line-item">
        <Percentage status={this.props.lineitem.data.yesterday.pacing.status} percentage={this.props.lineitem.data.yesterday.pacing.actual} />
      </div>
    )
  }
}
