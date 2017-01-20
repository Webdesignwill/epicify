import React, { Component, PropTypes } from 'react'

export default class Details extends Component {

  static propTypes = {}

  constructor (props) {
    super(props)
    this.toggle = this.toggle.bind(this)
  }

  toggle (event) {
    this.refs.toggle.classList.toggle('expanded')
  }

  render () {

    const mediachannelfee = this.props.lineitem.config.has_media_channel_fee ? "Yes" : "No"
    const issplitlineitem = this.props.lineitem.config.is_split_line_item ? "Yes" : "No"
    const hasmanualoverride = this.props.lineitem.config.has_manual_override ? "Yes" : "No"
    const exchangerateapplied = this.props.lineitem.config.is_exchange_rate_applied ? "Yes" : "No"
    const spendimportedfromnetwork = this.props.lineitem.config.cost_config.cost_model.is_spend_imported_from_network ? "Yes" : "No"

    return (
      <div className="line-item-data-row" ref="toggle">
        <div className="data-row-header" onClick={(event) => this.toggle(event)}>
          Details <i className="fa fa-expand pull-right" aria-hidden="true"></i><i className="fa fa-times pull-right" aria-hidden="true"></i>
        </div>
        <div className="data-row-content">
          <div className="inner">
            <p>Spend Imported from Network <span className="pull-right">{spendimportedfromnetwork}</span></p>
            <p>Has Media Channel Fee <span className="pull-right">{mediachannelfee}</span></p>
            <p>Is Split Line Item <span className="pull-right">{issplitlineitem}</span></p>
            <p>Has Manual Override <span className="pull-right">{hasmanualoverride}</span></p>
            <p>Exchange Rate Applied <span className="pull-right">{exchangerateapplied}</span></p>
          </div>
        </div>
      </div>
    )
  }
}
