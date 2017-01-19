import React, { Component, PropTypes } from 'react'
import Currency from '../../../components/Currency'

export default class NetworkBudget extends Component {

  static propTypes = {}

  render () {

    return (
      <div className="col-sm-4 tile">
        <div className="tile-inner">
          <div className="tile-title">
            <p className="tile-header"><strong>Network Budget</strong></p>
            <Currency amount={this.props.mediachannel.config.budget.network} />
          </div>
          <div className="tile-content">
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
              <p>Budget (including fee`s)</p>
              <div className="amount">
                <Currency amount={this.props.mediachannel.config.budget.total} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
