import React, { Component, PropTypes } from 'react'
import Currency from '../../components/Currency'
import Percentage from '../../components/Percentage'
import NetworkBudget from './tiles/NetworkBudget'
import NetworkSpendToDate from './tiles/NetworkSpendToDate'
import NetworkSpendYesterday from './tiles/NetworkSpendYesterday'
import Cpm from './tiles/Cpm'
import Cpc from './tiles/Cpc'
import Ctr from './tiles/Ctr'

export default class Tiles extends Component {

  static propTypes = {}

  constructor (props) {
    super(props)
    this.toggle = this.toggle.bind(this)
  }

  toggle (event) {
    this.refs.toggle.classList.toggle('expanded')
  }

  render () {
    return (
      <div className="tiles col-sm-12" ref="toggle">
        <h4 className="tiles-header" onClick={(event) => this.toggle(event)}>{this.props.mediachannel.meta.name} <i className="fa fa-expand pull-right m__r" aria-hidden="true"></i><i className="fa fa-times pull-right m__r" aria-hidden="true"></i></h4>
        <div className="row tiles-row">
          <NetworkBudget mediachannel={this.props.mediachannel} />
          <NetworkSpendToDate mediachannel={this.props.mediachannel} />
          <NetworkSpendYesterday mediachannel={this.props.mediachannel} />
        </div>
        <div className="row tiles-row">
          <Cpm mediachannel={this.props.mediachannel} />
          <Cpc mediachannel={this.props.mediachannel} />
          <Ctr mediachannel={this.props.mediachannel} />
        </div>
      </div>
    )
  }
}
