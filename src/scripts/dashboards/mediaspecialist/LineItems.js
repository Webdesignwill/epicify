import React, { Component, PropTypes } from 'react'

import Name from './lineitems/Name'
import Progress from './lineitems/Progress'
import NetworkBudget from './lineitems/NetworkBudget'
import PacingToDate from './lineitems/PacingToDate'
import PacingYesterday from './lineitems/PacingYesterday'
import LeftPerDay from './lineitems/LeftPerDay'
import ActionsRevenue from './lineitems/ActionsRevenue'
import NetworkCpaToDate from './lineitems/NetworkCpaToDate'
import NetworkCpaYesterday from './lineitems/NetworkCpaYesterday'
import Roas from './lineitems/Roas'
import Cpc from './lineitems/Cpc'
import Cpm from './lineitems/Cpm'
import Ctr from './lineitems/Ctr'

export default class LineItems extends Component {

  static propTypes = {}

  render () {
    return (
      <div className="line-item-row">
        <Name lineitem={this.props.lineitem} />
        <Progress lineitem={this.props.lineitem} />
        <NetworkBudget lineitem={this.props.lineitem} />
        <PacingToDate lineitem={this.props.lineitem} />
        <PacingYesterday lineitem={this.props.lineitem} />
        <LeftPerDay lineitem={this.props.lineitem} />
        <ActionsRevenue lineitem={this.props.lineitem} />
        <NetworkCpaToDate lineitem={this.props.lineitem} />
        <NetworkCpaYesterday lineitem={this.props.lineitem} />
        <Roas lineitem={this.props.lineitem} />
        <Cpc lineitem={this.props.lineitem} />
        <Cpm lineitem={this.props.lineitem} />
        <Ctr lineitem={this.props.lineitem} />
      </div>
    )
  }
}
