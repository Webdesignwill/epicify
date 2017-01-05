import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import MediaChannelList from './MediaChannelList'

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
    return (
      <aside className="sidebar">
        <div className="sidebar-header">Customers</div>
        <div className="list-group">
          <div className={`list-group-item`}>
            <a href="#">
              <p className="lead select">Vodaphone <i className="fa fa-caret-down go-right" aria-hidden="true"></i></p>
            </a>
          </div>
        </div>
        <div className="sidebar-header">Campaigns</div>
        <div className="list-group">
          {this.props.campaigns ? this.props.campaigns.map(campaign =>
            <div className={`list-group-item ${this.toggleClass(campaign.id, '', 'expanded')}`} key={campaign.id}>
              <Link name={campaign.id} to={{ pathname: `/customer/${this.props.params.customerid}`, query: { campaignid: this.makeUrl(campaign.id) }}}>
                <p className="lead select"><i className={`fa fa-${this.toggleClass(campaign.id, 'square-o', 'check-square-o')}`} aria-hidden="true"></i> {campaign.meta.name}</p>
              </Link>
              <MediaChannelList mediachannels={campaign.media_channels} />
            </div>
          ) : null}
        </div>
      </aside>
    )
  }
}
