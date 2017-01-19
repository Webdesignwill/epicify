import React, { Component, PropTypes } from 'react'
import Currency from '../../../components/Currency'
import Percentage from '../../../components/Percentage'

export default class NetworkSpendToDate extends Component {

  static propTypes = {}

  render () {
    return (
      <div className="col-sm-4 tile">
        <div className="tile-inner">
          <div className="tile-title">
            <p className="tile-header"><strong>Net spend media plan</strong> <em>(to date)</em></p>
            <Percentage status={this.props.mediachannel.data.to_date.pacing.status} percentage={this.props.mediachannel.data.to_date.pacing.actual} />
          </div>

          <div className="tile-content">
            <div className="content-row">
              <p className="col-sm-6">Actual</p>
              <div className="amount col-sm-5">
                <Currency amount={this.props.mediachannel.data.to_date.spend.network.actual} />
                <em>(<Percentage percentage={this.props.mediachannel.data.to_date.pacing.actual} />)</em>
              </div>
            </div>
            <div className="content-row">
              <p className="col-sm-6">Target</p>
              <div className="amount col-sm-5">
                <Currency amount={this.props.mediachannel.data.to_date.spend.network.target} />
              </div>
            </div>
            <hr />
            <div className="content-row">
              <p className="col-sm-6">Difference</p>
              <div className="amount col-sm-5">
                <Currency amount={this.props.mediachannel.data.to_date.spend.network.difference} />
                <em>(<Percentage percentage={this.props.mediachannel.data.to_date.pacing.difference} />)</em>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
