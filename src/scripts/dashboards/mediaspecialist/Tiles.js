import React, { Component, PropTypes } from 'react'
import Currency from './Currency'
import Percentage from './Percentage'

export default class Tiles extends Component {

  static propTypes = {}

  render () {
    console.log(this.props.mediachannel)
    return (
      <div className="tiles col-sm-12">
        <h4 className="tiles-header">{this.props.mediachannel.meta.name}</h4>
        <div className="row tiles-row">
          <div className="col-sm-4 tile">
            <div className="tile-inner">
              <div className="tile-title">
                <p className="tile-header"><strong>Network Budget</strong></p>
                <Currency amount={this.props.mediachannel.config.budget.network} />
              </div>
              <div className="expandable">
                <div className="content-row">
                  <p>Media channel fee</p>
                  <div className="amount">
                    <Currency amount={this.props.mediachannel.config.budget.media_channel_fee} />
                  </div>
                </div>
                <div className="content-row">
                  <p>Ad server fee</p>
                  <div className="amount">
                    <Currency amount={this.props.mediachannel.config.budget.ad_server_fee} />
                  </div>
                </div>
                <hr />
                <div className="content-row">
                  <p>Budget (including fee's)</p>
                  <div className="amount">
                    <Currency amount={this.props.mediachannel.config.budget.total} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 tile">
            <div className="tile-inner">
              <div className="tile-title">
                <p className="tile-header"><strong>Net spend media plan</strong> <em>(to date)</em></p>
                <Percentage status={this.props.mediachannel.data.to_date.pacing.status} percentage={this.props.mediachannel.data.to_date.pacing.actual} />
              </div>

              <div className="expandable">
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
          <div className="col-sm-4 tile">
            <div className="tile-inner">
              <div className="tile-title">
                <p className="tile-header"><strong>Net spend media plan</strong> <em>(yesterday)</em></p>
                <Percentage status={this.props.mediachannel.data.yesterday.pacing.status} percentage={this.props.mediachannel.data.yesterday.pacing.actual} />
              </div>
              <div className="expandable">
                <div className="content-row">
                  <p className="col-sm-6">Actual</p>
                  <div className="amount col-sm-5">
                    <Currency amount={this.props.mediachannel.data.yesterday.spend.network.actual} />
                    <em>(<Percentage percentage={this.props.mediachannel.data.yesterday.pacing.actual} />)</em>
                  </div>
                </div>
                <div className="content-row">
                  <p className="col-sm-6">Target</p>
                  <div className="amount col-sm-5">
                    <Currency amount={this.props.mediachannel.data.yesterday.spend.network.target} />
                  </div>
                </div>
                <hr />
                <div className="content-row">
                  <p className="col-sm-6">Difference</p>
                  <div className="amount col-sm-5">
                    <Currency amount={this.props.mediachannel.data.yesterday.spend.network.difference} />
                    <em>(<Percentage percentage={this.props.mediachannel.data.yesterday.pacing.difference} />)</em>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row tiles-row">
          <div className="col-sm-4 tile">
            <div className="tile-inner">
              <div className="tile-title">
                <p className="tile-header"><strong>CPM</strong></p>
                <Percentage status={this.props.mediachannel.data.to_date.cpm.status} percentage={this.props.mediachannel.data.to_date.cpm.actual} />
                <em>{this.props.mediachannel.data.to_date.cpm.target ? (this.props.mediachannel.data.to_date.cpm.target) : null}</em>
              </div>
            </div>
          </div>
          <div className="col-sm-4 tile">
            <div className="tile-inner">
              <div className="tile-title">
                <p className="tile-header"><strong>CPC</strong></p>
                <Percentage status={this.props.mediachannel.data.to_date.cpc.status} percentage={this.props.mediachannel.data.to_date.cpc.actual} />
                <em>{this.props.mediachannel.data.to_date.cpc.target ? (this.props.mediachannel.data.to_date.cpc.target) : null}</em>
              </div>
            </div>
          </div>
          <div className="col-sm-4 tile">
            <div className="tile-inner">
              <div className="tile-title">
                <p className="tile-header"><strong>CTR</strong></p>
                <Percentage status={this.props.mediachannel.data.to_date.ctr.status} percentage={this.props.mediachannel.data.to_date.ctr.actual} />
                <em>{this.props.mediachannel.data.to_date.ctr.target ? (this.props.mediachannel.data.to_date.ctr.target) : null}</em>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
