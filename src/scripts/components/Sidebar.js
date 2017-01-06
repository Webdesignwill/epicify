import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import MediaChannelList from './MediaChannelList'
import CustomerDropdown from '../containers/dashboards/mediaspecialist/CustomerDropdown'

export default class Sidebar extends Component {

  static propTypes = {}

  constructor (props) {
    super(props)
    this.makeUrl = this.makeUrl.bind(this)
    this.toggleClass = this.toggleClass.bind(this)
  }

  makeUrl (id) {

    if(!this.props.campaignids) {
      return [id]
    }

    if(typeof this.props.campaignids === 'string') {
      let campaignid = parseInt(this.props.campaignids)
      if(campaignid === id) {
        return []
      }
      return [campaignid, id]
    }

    if(typeof this.props.campaignids === 'object') {
      let newArray = [...this.props.campaignids]

      if(newArray.indexOf(id.toString()) > -1) {
        newArray.splice(newArray.indexOf(id.toString()), 1)
      } else {
        newArray.push(id.toString())
      }

      return newArray
    }
  }

  toggleClass (id, first, second) {

    if(!this.props.campaignids || this.props.campaignids.indexOf(id.toString()) === -1) {
      return first
    }

    return second
  }

  render () {

    const customerText = this.props.customer ? "Campaigns" : null
    const customerName = this.props.customer && this.props.customer.meta.name ? this.props.customer.meta.name + "'s" : null

    return (
      <aside className="sidebar">
        <div className="sidebar-logo">
          <img src="/assets/img/baas-logo.png" />
        </div>
        <CustomerDropdown params={this.props.params} />
        <div className="sidebar-group">
          <div className="sidebar-header">
            <span className="customer-name">{customerName}</span> {customerText}
          </div>
          <div className="list-group">
            {this.props.campaigns ? this.props.campaigns.map(campaign =>
              <div className={`list-group-item ${this.toggleClass(campaign.id, '', 'expanded')}`} key={campaign.id}>
                <Link name={campaign.id} to={{ pathname: `/customer/${this.props.params.customerid}`, query: { campaignid: this.makeUrl(campaign.id) }}}>
                  <p className="lead select"><i className={`checkbox fa fa-${this.toggleClass(campaign.id, 'square-o', 'check-square-o')}`} aria-hidden="true"></i> {campaign.meta.name}</p>
                </Link>
                <MediaChannelList campaignid={campaign.id} mediachannels={campaign.media_channels} />
              </div>
            ) : null}
          </div>
        </div>
      </aside>
    )
  }
}
