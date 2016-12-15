import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class Sidebar extends Component {

  static propTypes = {}

  render () {
    console.log('SIDEBAR PROPS : ', this.props)
    return (
      <aside className="sidebar">
        <div className="sidebar-header">
          <h3>Campaigns</h3>
          <p>Please select the campaigns you would like to display information from</p>
        </div>
        <div className="list-group">
          {this.props.campaigns ? this.props.campaigns.map(campaign =>
            <div className="list-group-item" key={campaign.id}>
              <Link to={`/customer/${this.props.params.customerid}/campaign/${campaign.id}`}>
                <p className="lead select">{campaign.meta.name} <i className="fa fa-plus" aria-hidden="true"></i></p>
              </Link>
            </div>
          ) : null}
        </div>
      </aside>
    )
  }
}
